// Keep the detailed lessons and appended chapters readable without JavaScript.
const fs = require('node:fs'), vm = require('node:vm');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync('curriculum-expansion.js','utf8'),context);
const depth = vm.runInContext('lessonDepth',context), added = vm.runInContext('extraLessons',context), guides = vm.runInContext('chapterGuides',context);
const esc = value => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const original = fs.readFileSync('courses.html','utf8'); let updated = original;
for (const [id, lessons] of Object.entries(added)) {
  if (!/^[a-z]+$/.test(id) || !Array.isArray(depth[id])) throw Error(`Missing base material for ${id}`);
  const re = new RegExp(`(<article id="${id}"[\\s\\S]*?<\\/article>)`);
  let matched = false;
  updated = updated.replace(re, article => {
    matched = true;
    article = article.replace(/<!-- EXPANDED_CHAPTERS_START -->[\s\S]*?<!-- EXPANDED_CHAPTERS_END -->/, '');
    let found = 0;
    article = article.replace(/<section><h3>(\d+)\.[\s\S]*?<\/section>/g, (section, number) => {
      const index = Number(number)-1, paragraphs = depth[id][index];
      if (!paragraphs || index !== found) throw Error(`Missing or out-of-order ${id} lesson ${number}`);
      found++;
      section = section.replace(/<!-- LESSON_DEPTH_START -->[\s\S]*?<!-- LESSON_DEPTH_END -->/, '');
      const detail = `<!-- LESSON_DEPTH_START --><div class="static-lesson-depth"><h4>Understanding this concept</h4>${paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}</div><!-- LESSON_DEPTH_END -->`;
      return /<!-- [A-Z]+_EXTRA_START -->/.test(section) ? section.replace(/<!-- [A-Z]+_EXTRA_START -->/, marker => detail + marker) : section.replace(/<\/section>$/,`${detail}</section>`);
    });
    if (found !== depth[id].length) throw Error(`${id} expected ${depth[id].length} base lessons, found ${found}`);
    const sections = lessons.map((lesson,index) => {
      const g = guides[id]?.[index];
      if (!g || !Array.isArray(g.steps) || g.steps.length < 3 || !g.bn || !g.goal || !g.result || !g.mistake || !g.question || !g.answer) throw Error(`Missing guide for ${id} chapter ${index}`);
      return `<section><h3>${found+index+1}. ${esc(lesson.title)}</h3><p>${esc(lesson.text)}</p><div class="static-lesson-depth"><h4>Understanding this concept</h4>${lesson.details.map(p=>`<p>${esc(p)}</p>`).join('')}</div><pre tabindex="0" aria-label="Example code"><code>${esc(lesson.code)}</code></pre><div class="static-lesson-extra"><h4>Learn step by step</h4><p><strong>Learning goal:</strong> ${esc(g.goal)}</p><p lang="bn"><strong>বাংলা সারাংশ:</strong> ${esc(g.bn)}</p><ol>${g.steps.map(step=>`<li>${esc(step)}</li>`).join('')}</ol><p><strong>Expected result:</strong> ${esc(g.result)}</p><p><strong>Common mistake:</strong> ${esc(g.mistake)}</p><p><strong>Check your understanding:</strong> ${esc(g.question)}</p><details><summary>Show the answer</summary><p>${esc(g.answer)}</p></details><p>The Bengali text is a short supporting summary; the full lesson is in English.</p></div><p><strong>Practice:</strong> ${esc(lesson.practice)}</p></section>`;
    }).join('');
    const position = article.lastIndexOf('</section>');
    if (position < 0) throw Error(`No lessons in ${id}`);
    const insert = position + '</section>'.length;
    return article.slice(0,insert)+`<!-- EXPANDED_CHAPTERS_START -->${sections}<!-- EXPANDED_CHAPTERS_END -->`+article.slice(insert);
  });
  if (!matched) throw Error(`Missing static course ${id}`);
}
if (process.argv.includes('--check')) {
  if (updated !== original) { console.error('courses.html expanded chapters are out of date. Run node scripts/update-expanded-lessons.cjs'); process.exitCode = 1; }
} else fs.writeFileSync('courses.html',updated);
