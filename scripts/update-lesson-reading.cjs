// Sync Python's optional guides to the JavaScript-free reading page.
const fs = require('node:fs');
const vm = require('node:vm');
const ctx = vm.createContext({});
vm.runInContext(fs.readFileSync('lesson-extras.js', 'utf8'), ctx);
const extras = vm.runInContext('lessonExtras.python', ctx);
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const original = fs.readFileSync('courses.html', 'utf8');
let found = 0;
const updated = original.replace(/(<article id="python"[\s\S]*?<\/article>)/, article => article.replace(/<section><h3>(\d+)\.[\s\S]*?<\/section>/g, (section, number) => {
  const index = Number(number) - 1, extra = extras[index];
  if (!extra) throw Error(`Missing Python guide ${number}`);
  found++;
  section = section.replace(/<!-- PYTHON_EXTRA_START -->[\s\S]*?<!-- PYTHON_EXTRA_END -->/, '');
  const guide = `<!-- PYTHON_EXTRA_START --><div class="static-lesson-extra"><h4>Learn step by step</h4><ol>${extra.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol><p><strong>Tip:</strong> ${esc(extra.tip)}</p><details><summary lang="bn">বাংলা সারাংশ</summary><p lang="bn">${esc(extra.summaries.bn)}</p></details><details><summary lang="hi">हिन्दी सारांश</summary><p lang="hi">${esc(extra.summaries.hi)}</p></details><p><strong>Quick understanding check:</strong> ${esc(extra.check.question)}</p><details><summary>Show the answer and explanation</summary><p>${esc(extra.check.options[extra.check.answer])} — ${esc(extra.check.explanation)}</p></details></div><!-- PYTHON_EXTRA_END -->`;
  return section.replace(/<\/section>$/, `${guide}</section>`);
}));
if (found !== extras.length || found === 0) throw Error(`Python lesson count mismatch: ${found} vs ${extras.length}`);
if (process.argv.includes('--check')) {
  if (updated !== original) { console.error('courses.html Python guides are out of date. Run node scripts/update-lesson-reading.cjs'); process.exitCode = 1; }
} else fs.writeFileSync('courses.html', updated);
