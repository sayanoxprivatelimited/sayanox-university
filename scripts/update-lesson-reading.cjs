// Sync optional lesson guides to the JavaScript-free reading page.
const fs = require('node:fs');
const vm = require('node:vm');
const ctx = vm.createContext({});
vm.runInContext(fs.readFileSync('lesson-extras.js', 'utf8'), ctx);
const extrasByCourse = vm.runInContext('lessonExtras', ctx);
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const original = fs.readFileSync('courses.html', 'utf8');
let updated = original;
for (const [courseId, extras] of Object.entries(extrasByCourse)) {
  if (!/^[a-z]+$/.test(courseId)) throw Error(`Invalid course id ${courseId}`);
  const marker = `${courseId.toUpperCase()}_EXTRA`, articlePattern = new RegExp(`(<article id="${courseId}"[\\s\\S]*?<\\/article>)`);
  const markerPattern = new RegExp(`<!-- ${marker}_START -->[\\s\\S]*?<!-- ${marker}_END -->`);
  let found = 0, matched = false;
  updated = updated.replace(articlePattern, article => {
    matched = true;
    return article.replace(/<section><h3>(\d+)\.[\s\S]*?<\/section>/g, (section, number) => {
      const index = Number(number) - 1, extra = extras[index];
      if (!extra || index !== found) throw Error(`Missing or out-of-order ${courseId} guide ${number}`);
      found++;
      section = section.replace(markerPattern, '');
      const guide = `<!-- ${marker}_START --><div class="static-lesson-extra"><h4>Learn step by step</h4><ol>${extra.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol><p><strong>Tip:</strong> ${esc(extra.tip)}</p><details><summary lang="bn">বাংলা সারাংশ</summary><p lang="bn">${esc(extra.summaries.bn)}</p></details><details><summary lang="hi">हिन्दी सारांश</summary><p lang="hi">${esc(extra.summaries.hi)}</p></details><p><strong>Quick understanding check:</strong> ${esc(extra.check.question)}</p><details><summary>Show the answer and explanation</summary><p>${esc(extra.check.options[extra.check.answer])} — ${esc(extra.check.explanation)}</p></details></div><!-- ${marker}_END -->`;
      return section.replace(/<\/section>$/, `${guide}</section>`);
    });
  });
  if (!matched || found !== extras.length || found === 0) throw Error(`${courseId} lesson count mismatch: ${found} vs ${extras.length}`);
}
if (process.argv.includes('--check')) {
  if (updated !== original) { console.error('courses.html guides are out of date. Run node scripts/update-lesson-reading.cjs'); process.exitCode = 1; }
} else fs.writeFileSync('courses.html', updated);
