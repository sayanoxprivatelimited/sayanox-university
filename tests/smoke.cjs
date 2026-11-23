const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const elements = {};
function el(id) {
  return elements[id] ??= {innerHTML:'', textContent:'', hidden:false, open:false, value:'', dataset:{}, style:{}, appendChild(){}, classList:{toggle(){return false}, contains(){return false}, remove(){}}, addEventListener(type, fn){this['on'+type]=fn}, querySelector(){return null}, setAttribute(){}, showModal(){this.open=true}, close(){this.open=false}};
}
const filters = ['all','programming','web','fundamentals'].map(x => ({dataset:{filter:x}, classList:{toggle(){}}, addEventListener(type,fn){this.fn=fn}}));
let printed = false;
const store = new Map();
let fakeAnswers = ['0','0','0','0','0','0','0','0'];
class FakeFormData { get(key) { return fakeAnswers[Number(key.replace('question',''))] ?? null; } }
const context = {document:{getElementById:el,querySelectorAll:()=>filters,createTreeWalker:()=>({nextNode(){return false}}),createElement:()=>({textContent:'',className:''}),createTextNode:text=>({textContent:text})},localStorage:{getItem(key){return store.has(key) ? store.get(key) : null},setItem(key,value){store.set(key,value)},removeItem(key){store.delete(key)}},window:{print(){printed=true},confirm(){return true},location:{search:''}},URLSearchParams,FormData:FakeFormData,crypto:{getRandomValues(a){a.fill(12);return a}},Intl,Date,console,setTimeout,clearTimeout};
vm.createContext(context);
vm.runInContext(fs.readFileSync('course-details.js','utf8'), context);
vm.runInContext(fs.readFileSync('quizzes.js','utf8'), context);
vm.runInContext(fs.readFileSync('projects.js','utf8'), context);
vm.runInContext(fs.readFileSync('challenges.js','utf8'), context);
vm.runInContext(fs.readFileSync('lesson-extras.js','utf8'), context);
vm.runInContext(fs.readFileSync('app.js','utf8'), context);
vm.runInContext(fs.readFileSync('backup.js','utf8'), context);
assert.equal(vm.runInContext('courses.length',context),10);
assert.equal(el('courseCount').textContent, String(vm.runInContext('courses.length',context)).padStart(2, '0'));
assert.equal((el('courseGrid').innerHTML.match(/class="course-card"/g)||[]).length,10);
assert.equal(vm.runInContext('courses.every(c => courseProjects[c.id].tasks.length >= 4)',context),true);
assert.equal(vm.runInContext('courses.every(c => quizzes[c.id].length === 8 && quizFor(c).every(q => q.answer >= 0 && q.answer < q.options.length))',context),true);
assert.equal(vm.runInContext('courses.every(c => c.lessons.length >= 3 && courseDetails[c.id] && c.lessons.every(l => l.title && l.text && l.code && l.practice))',context),true);
// Search result content and syntax tokens are rendered as text, not markup.
const payload = '</strong><img src=x onerror=alert(1)>';
const oldTitle = vm.runInContext('courses[0].lessons[0].title', context);
context.payload = payload;
vm.runInContext("courses[0].lessons[0].title = payload; renderLessonSearch('onerror')", context);
assert(!el('lessonSearchResults').innerHTML.includes('<img'));
assert(vm.runInContext('textSlots.includes(payload)', context));
context.oldTitle = oldTitle; vm.runInContext('courses[0].lessons[0].title = oldTitle', context);
const chunks = [];
const originalCreateText = context.document.createTextNode, originalCreate = context.document.createElement;
context.document.createTextNode = value => ({kind:'text', textContent:value});
context.document.createElement = () => ({kind:'span', className:'', textContent:''});
context.highlightTarget = {textContent:'', appendChild: item => chunks.push(item)};
vm.runInContext("highlightExample(highlightTarget, 'def x():\\n  return 42 # <img>', 'python')", context);
assert.equal(chunks.map(item=>item.textContent).join(''), 'def x():\n  return 42 # <img>');
assert(chunks.some(item=>item.className === 'syntax-keyword' && item.textContent === 'def'));
assert(chunks.every(item=>item.kind === 'text' || item.kind === 'span'));
context.document.createTextNode = originalCreateText; context.document.createElement = originalCreate;
filters[2].fn();
assert.equal((el('courseGrid').innerHTML.match(/class="course-card"/g)||[]).length,2);
for (const id of vm.runInContext('courses.map(c => c.id)', context)) {
  vm.runInContext(`openCourse(${JSON.stringify(id)})`,context);
  assert(el('courseDialog').open);
  assert(el('dialogContent').innerHTML.includes('Course overview'));
  assert(el('dialogContent').innerHTML.includes('Practice studio'));
  assert(el('dialogContent').innerHTML.includes('The story behind'));
}
vm.runInContext("openCourse('python'); currentView = 'lesson'; renderDialog()",context);
assert(!el('dialogContent').innerHTML.includes('id="certificateForm"'));
assert(el('dialogContent').innerHTML.includes('data-action="download-notes"'));
assert(el('dialogContent').innerHTML.includes('data-action="copy-example"'));
assert(el('dialogContent').innerHTML.includes('id="readingProgress"'));
assert(el('dialogContent').innerHTML.includes('id="summaryLanguage"'));
assert(el('dialogContent').innerHTML.includes('id="lessonCheckForm"'));
assert.equal(vm.runInContext('lessonExtras.python.length === courses[0].lessons.length && lessonExtras.python.every(e => [e.summaries.en, e.summaries.bn, e.summaries.hi, e.tip, e.check.explanation].every(Boolean) && e.steps.length >= 3 && e.check.answer >= 0 && e.check.answer < e.check.options.length)',context),true);
el('dialogContent').onchange({target:{id:'summaryLanguage',value:'bn'}});
assert.equal(store.get('sayanox-lesson-language'),'bn');
assert.equal(el('lessonSummary').lang,'bn');
assert.equal(el('lessonSummary').textContent,vm.runInContext('lessonExtras.python[0].summaries.bn',context));
assert(vm.runInContext("searchLessons('ভেরিয়েবল').some(r => r.course.id === 'python')",context));
assert(vm.runInContext("lessonMarkdown(currentCourse, currentCourse.lessons[0], '').includes(lessonExtras.python[0].summaries.bn)",context));
context.checkAnswer = '0';
const oldFormData = context.FormData;
context.FormData = class {get(){return context.checkAnswer}};
el('dialogContent').onsubmit({target:{id:'lessonCheckForm'},preventDefault(){}});
assert(el('lessonCheckResult').textContent.startsWith('Correct.'));
context.checkAnswer = '1';
el('dialogContent').onsubmit({target:{id:'lessonCheckForm'},preventDefault(){}});
assert(el('lessonCheckResult').textContent.startsWith('Not quite.'));
context.FormData = oldFormData;
assert.throws(() => vm.runInContext("validateBackup({format:backupFormat,version:backupVersion,data:{'sayanox-lesson-language':'xx'}})",context));
assert.equal(vm.runInContext("validateBackup({format:backupFormat,version:backupVersion,data:{'sayanox-lesson-language':'hi'}})['sayanox-lesson-language']",context),'hi');
assert.equal(vm.runInContext("validateBackup({format:backupFormat,version:backupVersion,data:{}}) && true",context),true);
vm.runInContext("restoreBackup(validateBackup({format:backupFormat,version:backupVersion,data:{'sayanox-lesson-language':'hi'}}))",context);
assert.equal(vm.runInContext('lessonLanguage',context),'hi');
vm.runInContext("restoreBackup(validateBackup({format:backupFormat,version:backupVersion,data:{}}))",context);
assert.equal(vm.runInContext('lessonLanguage',context),'en');
require('node:child_process').execFileSync(process.execPath, ['scripts/update-lesson-reading.cjs','--check']);
assert(fs.readFileSync('sw.js','utf8').includes("'lesson-extras.js'"));
assert(vm.runInContext("searchLessons('indentation python').some(r => r.course.id === 'python')",context));
assert.equal(vm.runInContext("searchLessons('not-a-real-lesson').length",context), 0);
assert(vm.runInContext("searchLessons('PRINT(\"HELLO, WORLD!\")').some(r => r.course.id === 'python')",context));
assert.equal(vm.runInContext("searchLessons('uniqueprivatenote').length",context),0);
assert.equal(vm.runInContext("lessonMinutes(courses[0].lessons[0]) >= 3",context), true);
assert(vm.runInContext("lessonMarkdown(courses[0], {title:'t', text:'x', code:'~~~', practice:'p'}, '').includes('~~~~\\n~~~\\n~~~~')",context));
assert(vm.runInContext("lessonMarkdown(courses[0], courses[0].lessons[0], 'Private note').includes('Private note')",context));
context.window.confirm = () => false;
el('dialogContent').onclick({target:{closest(sel){return sel==='[data-action]'?{dataset:{action:'complete'}}:null}}});
assert.equal(vm.runInContext('doneFor(currentCourse).length',context),0);
context.window.confirm = () => true;
el('dialogContent').oninput({target:{id:'lessonNotes',value:'My notes'}});
assert.equal(store.get('sayanox-notes-python-0'),'My notes');
el('dialogContent').oninput({target:{id:'practiceEditor',value:'print(42)'}});
assert.equal(store.get('sayanox-draft-python-0'),'print(42)');
el('dialogContent').onclick({target:{closest(sel){return sel==='[data-action]'?{dataset:{action:'bookmark'}}:null}}});
assert(JSON.parse(store.get('sayanox-bookmarks'))['sayanox-bookmark-python-0']);
vm.runInContext("currentView='challenge'; challengeIndex=0; renderDialog()",context);
assert(el('dialogContent').innerHTML.includes('Hint 1'));
assert(el('dialogContent').innerHTML.includes('id="challengeSolution" hidden'));
vm.runInContext("challengeAttempts.add('python-0'); renderDialog()",context);
assert(!el('dialogContent').innerHTML.includes('id="challengeSolution" hidden'));
vm.runInContext("currentView='project'; renderDialog()",context);
assert(el('dialogContent').innerHTML.includes('Build it step by step'));
el('dialogContent').onchange({target:{matches(){return true},dataset:{projectTask:'0'},checked:true}});
assert.equal(store.get('sayanox-project-python'),'[0]');
vm.runInContext("currentView='quiz'; renderDialog()",context);
assert(el('dialogContent').innerHTML.includes('id="quizForm"'));
el('dialogContent').onsubmit({target:{id:'quizForm'},preventDefault(){}});
assert.equal(JSON.parse(store.get('sayanox-quiz-scores')).python,4);
assert(el('dialogContent').innerHTML.includes('quiz-explanation'));
el('dialogContent').onclick({target:{closest(sel){return sel==='[data-action]'?{dataset:{action:'retry-wrong'}}:null}}});
assert.equal(vm.runInContext('quizRetryAnswers.filter(v => v !== null).length',context),4);
fakeAnswers = vm.runInContext('quizFor(currentCourse).map(q => String(q.answer))',context);
el('dialogContent').onsubmit({target:{id:'quizForm'},preventDefault(){}});
assert.equal(JSON.parse(store.get('sayanox-quiz-scores')).python,8);
vm.runInContext("currentView='lesson'; renderDialog()",context);
for (let i=0;i<5;i++) {
  vm.runInContext(`currentLesson=${i}`,context);
  el('dialogContent').onclick({target:{closest(sel){return sel==='[data-action]'?{dataset:{action:'complete'}}:null}}});
}
vm.runInContext("currentView='certificate'; renderDialog()",context);
assert(el('dialogContent').innerHTML.includes('id="certificateForm"'));
vm.runInContext("printCertificate('<Student>', currentCourse)",context);
assert(printed);
assert(!el('printArea').innerHTML.includes('<Student>'));
assert(vm.runInContext("textSlots.includes('<Student>')", context));
assert(el('printArea').innerHTML.includes('Sayan Mahata'));
assert(el('printArea').innerHTML.includes('This checks the ID format only. Certificates are self-reported and not independently verified.'));
assert.equal(JSON.parse(store.get('sayanox-certificates-v1'))[0].id, 'SU-' + '0C'.repeat(16));
// Backup validates known keys and restores only application-owned data.
store.set('unrelated-app-key','keep');
const backup = vm.runInContext('collectBackup()', context);
assert.equal(backup.data['sayanox-notes-python-0'], 'My notes');
assert.equal(backup.data['sayanox-project-python'], '[0]');
assert(JSON.parse(backup.data['sayanox-certificates-v1'])[0].id.startsWith('SU-'));
assert.equal(backup.data['unrelated-app-key'], undefined);
context.savedBackup = backup;
vm.runInContext('validateBackup(savedBackup)',context);
assert.throws(() => vm.runInContext("validateBackup({format:'sayanox-learning-backup',version:1,data:{'unrelated-app-key':'bad'}})",context), /unsupported entry/);
assert.throws(() => vm.runInContext("validateBackup({format:'sayanox-learning-backup',version:1,data:{'sayanox-progress-v1':'{\"python\":[999]}'}})",context), /Invalid lesson progress/);
store.set('sayanox-notes-python-0','Changed');
vm.runInContext('restoreBackup(savedBackup.data)',context);
assert.equal(store.get('sayanox-notes-python-0'),'My notes');
assert.equal(store.get('unrelated-app-key'),'keep');
// A failed import write must restore the pre-import state when storage recovers.
store.set('sayanox-notes-python-0','before failed import');
let failOnce = true;
const normalSet = context.localStorage.setItem;
context.localStorage.setItem = (key,value) => { if (failOnce && key === 'sayanox-notes-python-0') { failOnce = false; throw Error('quota'); } normalSet(key,value); };
assert.throws(() => vm.runInContext('restoreBackup(savedBackup.data)', context), /previous data was restored/);
assert.equal(store.get('sayanox-notes-python-0'), 'before failed import');
context.localStorage.setItem = normalSet;
// The disposable worker is terminated when the run timeout expires.
let timeoutHandler, fakeWorker;
context.setTimeout = (fn, ms) => { assert.equal(ms,45000); timeoutHandler = fn; return 9; };
context.clearTimeout = () => {};
context.Worker = class { constructor(){ fakeWorker=this; this.terminated=false; } postMessage(data){this.data=data;} terminate(){this.terminated=true;} };
vm.runInContext("currentCourse = courses[0]; currentView = 'lesson'; currentLesson = 0", context);
el('practiceEditor').value = 'print(42)';
vm.runInContext('runCode()',context);
assert.equal(fakeWorker.data.mode,'python'); timeoutHandler();
assert(fakeWorker.terminated); assert.match(el('studioOutput').textContent,/timed out/);
// Static fallback and offline precache cover every course and every local asset.
const html = fs.readFileSync('index.html','utf8'), staticCourses = fs.readFileSync('courses.html','utf8');
assert.match(html, /<noscript>[\s\S]*?Browse introductory courses[\s\S]*?<\/noscript>/);
assert(html.includes('Self-reported completion certificate, not an independently verified or accredited credential.'));
const footer = html.match(/<footer>[\s\S]*?<\/footer>/)[0];
for (const [href, label] of [['about/','About'], ['contact/','Contact'], ['privacy/','Privacy'], ['terms/','Terms'], ['https://github.com/sayanoxprivatelimited/sayanox-university','GitHub']]) assert(footer.includes(`href="${href}">${label}</a>`));
const disclaimer = 'This checks the ID format only. Certificates are self-reported and not independently verified.';
assert(fs.readFileSync('verify/index.html','utf8').includes(disclaimer));
const verifyEls = {verifyForm:{addEventListener(type, fn){this.submit = fn}}, certificateId:{value:''}, verifyResult:{textContent:''}};
vm.runInNewContext(fs.readFileSync('verify.js','utf8'), {document:{getElementById:id=>verifyEls[id]}});
for (const [input, expected] of [['SU-'+'a'.repeat(32), /format looks correct/], ['SU-'+'Z'.repeat(32), /format does not match/], ['', /format does not match/]]) {
  verifyEls.certificateId.value = input; verifyEls.verifyForm.submit({preventDefault(){}}); assert.match(verifyEls.verifyResult.textContent, expected);
}
// Both hosts must serve the same policy; narrower Cloudflare rules detach before replacing.
const vercel = JSON.parse(fs.readFileSync('vercel.json','utf8')).headers;
const headerBlocks = fs.readFileSync('_headers','utf8').trim().split(/\n\s*\n/);
const applyCloudflare = path => {
  const result = {};
  for (const block of headerBlocks) {
    const [pattern, ...lines] = block.split('\n');
    if (pattern !== '/*' && pattern !== path) continue;
    for (const line of lines) { const text = line.trim(); if (text.startsWith('! ')) delete result[text.slice(2).toLowerCase()]; else { const i = text.indexOf(':'); const key = text.slice(0,i).toLowerCase(); result[key] = result[key] ? `${result[key]}, ${text.slice(i+1).trim()}` : text.slice(i+1).trim(); } }
  }
  return result;
};
for (const [path, special] of [['/', null], ['/runner-worker.js', '/runner-worker.js'], ['/preview.html', '/preview.html'], ['/preview', '/preview'], ['/preview/', '/preview/']]) {
  const expected = Object.fromEntries(vercel[0].headers.map(h=>[h.key.toLowerCase(),h.value]));
  if (special) for (const h of vercel.find(rule=>rule.source===special).headers) expected[h.key.toLowerCase()] = h.value;
  assert.deepEqual(applyCloudflare(path), expected, `header mismatch for ${path}`);
  const scriptSrc = expected['content-security-policy'].match(/(?:^|;)\s*script-src\s+([^;]+)/)[1];
  assert(!scriptSrc.includes("'unsafe-inline'"), `unsafe inline scripts on ${path}`);
}
// The only inline bootstrap is hash-pinned for an offline opaque-origin preview.
const cryptoNode = require('node:crypto');
const preview = fs.readFileSync('preview.html','utf8');
const bootstrap = preview.match(/<script>([\s\S]*?)<\/script>/)[1];
const bootstrapHash = "'sha256-" + cryptoNode.createHash('sha256').update(bootstrap).digest('base64') + "'";
assert(preview.includes(bootstrapHash));
assert(applyCloudflare('/preview.html')['content-security-policy'].includes(bootstrapHash));
for (const file of ['index.html','verify/index.html','courses.html','about/index.html','contact/index.html','privacy/index.html','terms/index.html','roadmap/index.html']) {
  for (const script of fs.readFileSync(file,'utf8').matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) assert(/\bsrc=/.test(script[1]) && !script[2].trim(), `Unexpected inline script in ${file}`);
}
const siteUrl = fs.readFileSync('site-url.txt','utf8').trim();
assert(html.includes(`rel="canonical" href="${siteUrl}"`));
assert(html.includes(`property="og:url" content="${siteUrl}"`));
// SEO remains server-rendered, accurate, and aligned with the single site URL.
assert(html.includes('<meta name="google-site-verification" content="WfYTLVQ9RGRXAi5adJQg6bqLVG5Am6ITTobTYieMxaE">'));
assert.match(html, /<a href="courses\.html">Read free course lessons without JavaScript/);
assert.match(html, /itemscope itemtype="https:\/\/schema\.org\/WebSite"/);
assert.equal((staticCourses.match(/itemtype="https:\/\/schema\.org\/Course"/g) || []).length, vm.runInContext('courses.length',context));
assert.equal((staticCourses.match(/itemprop="isAccessibleForFree" content="true"/g) || []).length, vm.runInContext('courses.length',context));
for (const id of vm.runInContext('courses.map(c => c.id)', context)) assert(staticCourses.includes(`itemprop="url" href="${siteUrl}courses.html#${id}"`));
const seoPages = [['index.html',''], ['courses.html','courses.html'], ['roadmap/index.html','roadmap/'], ['about/index.html','about/'], ['contact/index.html','contact/'], ['privacy/index.html','privacy/'], ['terms/index.html','terms/'], ['verify/index.html','verify/']];
const titles = new Set();
for (const [file,path] of seoPages) {
  const contents = fs.readFileSync(file,'utf8'), url = new URL(path,siteUrl).href;
  assert(contents.includes(`rel="canonical" href="${url}"`), `canonical for ${file}`);
  assert(contents.includes(`property="og:url" content="${url}"`));
  assert(contents.includes(`property="og:image" content="${siteUrl}social-card.png"`));
  assert(contents.includes(`name="twitter:image" content="${siteUrl}social-card.png"`));
  assert.match(contents, /<meta name="description" content="[^"]+"/);
  const title = contents.match(/<title>([^<]+)<\/title>/)[1]; assert(!titles.has(title)); titles.add(title);
}
const card = fs.readFileSync('social-card.png');
assert.equal(card.subarray(0,8).toString('hex'), '89504e470d0a1a0a');
assert.equal(card.readUInt32BE(16),1200); assert.equal(card.readUInt32BE(20),630);
// Exercise a domain change in a temporary copy; no site build is needed at runtime.
const os = require('node:os'), path = require('node:path'), cp = require('node:child_process');
const tempSeo = fs.mkdtempSync(path.join(os.tmpdir(), 'sayanox-seo-'));
try {
  fs.mkdirSync(path.join(tempSeo, 'scripts'));
  fs.copyFileSync('scripts/update-site-url.cjs', path.join(tempSeo, 'scripts/update-site-url.cjs'));
  for (const [file] of seoPages) { fs.mkdirSync(path.dirname(path.join(tempSeo, file)), {recursive:true}); fs.copyFileSync(file,path.join(tempSeo,file)); }
  fs.writeFileSync(path.join(tempSeo,'site-url.txt'),'https://example.org/\n');
  cp.execFileSync(process.execPath, ['scripts/update-site-url.cjs'], {cwd:tempSeo});
  for (const [file,subpath] of seoPages) {
    const contents=fs.readFileSync(path.join(tempSeo,file),'utf8');
    assert(contents.includes(`rel="canonical" href="https://example.org/${subpath}"`));
    assert(contents.includes('content="https://example.org/social-card.png"'));
    assert(contents.includes(`property="og:url" content="https://example.org/${subpath}"`));
  }
  assert(fs.readFileSync(path.join(tempSeo,'courses.html'),'utf8').includes('itemprop="url" href="https://example.org/courses.html#python"'));
  assert(fs.readFileSync(path.join(tempSeo,'sitemap.xml'),'utf8').includes('https://example.org/courses.html'));
  assert(fs.readFileSync(path.join(tempSeo,'robots.txt'),'utf8').includes('https://example.org/sitemap.xml'));
} finally { fs.rmSync(tempSeo,{recursive:true,force:true}); }
const sitemap = fs.readFileSync('sitemap.xml','utf8');
for (const path of ['', 'courses.html', 'roadmap/', 'about/', 'contact/', 'privacy/', 'terms/', 'verify/']) assert(sitemap.includes(`<loc>${new URL(path,siteUrl).href}</loc>`));
assert(fs.readFileSync('robots.txt','utf8').includes(`Sitemap: ${new URL('sitemap.xml',siteUrl).href}`));
const manifest = JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
assert(!/^[a-z]+:/i.test(manifest.start_url) && !/^[a-z]+:/i.test(manifest.scope));
for (const id of vm.runInContext('courses.map(c => c.id)',context)) { assert(html.includes(`courses.html#${id}`)); assert(staticCourses.includes(`id="${id}"`)); }
const swContext = {self:{addEventListener(){}}}; vm.createContext(swContext); vm.runInContext(fs.readFileSync('sw.js','utf8'),swContext);
for (const item of vm.runInContext('FILES',swContext)) assert(fs.existsSync(item), `Missing precache asset: ${item}`);
assert(!fs.readFileSync('runner-worker.js','utf8').includes('cdnjs.cloudflare.com'));
// Exercise actual JavaScript worker execution and error reporting without network dependencies.
(async () => {
  const messages = [];
  const workerContext = {self:{postMessage: m => messages.push(m)}};
  vm.createContext(workerContext);
  vm.runInContext(fs.readFileSync('runner-worker.js','utf8'), workerContext);
  await workerContext.self.onmessage({data:{mode:'javascript',code:'console.log("Hello", 42)'}});
  assert.equal(messages.pop().output, 'Hello 42');
  await workerContext.self.onmessage({data:{mode:'javascript',code:'function double(n){return n*2}',challengeTests:'\nif(double(2)!==4) throw Error("wrong"); console.log("passed");'}});
  assert.match(messages.pop().output, /passed/);
  await workerContext.self.onmessage({data:{mode:'javascript',code:'throw new Error("bad code")'}});
  assert.match(messages.pop().output, /bad code/);
  console.log('Smoke tests passed: classroom, projects, notes, quiz, backup validation, certificate and JS runner.');
})().catch(e => {console.error(e); process.exitCode=1;});
