const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const elements = {};
function el(id) {
  return elements[id] ??= {innerHTML:'', textContent:'', hidden:false, open:false, value:'', dataset:{}, style:{}, classList:{toggle(){return false}, contains(){return false}, remove(){}}, addEventListener(type, fn){this['on'+type]=fn}, querySelector(){return null}, setAttribute(){}, showModal(){this.open=true}, close(){this.open=false}};
}
const filters = ['all','programming','web','fundamentals'].map(x => ({dataset:{filter:x}, classList:{toggle(){}}, addEventListener(type,fn){this.fn=fn}}));
let printed = false;
const store = new Map();
class FakeFormData { get(key) { return ['0','0','0'][Number(key.replace('question',''))] ?? null; } }
const context = {document:{getElementById:el,querySelectorAll:()=>filters},localStorage:{getItem(key){return store.has(key) ? store.get(key) : null},setItem(key,value){store.set(key,value)},removeItem(key){store.delete(key)}},window:{print(){printed=true}},FormData:FakeFormData,Intl,Date,console,setTimeout,clearTimeout};
vm.createContext(context);
vm.runInContext(fs.readFileSync('course-details.js','utf8'), context);
vm.runInContext(fs.readFileSync('quizzes.js','utf8'), context);
vm.runInContext(fs.readFileSync('projects.js','utf8'), context);
vm.runInContext(fs.readFileSync('app.js','utf8'), context);
vm.runInContext(fs.readFileSync('backup.js','utf8'), context);
assert.equal(vm.runInContext('courses.length',context),10);
assert.equal((el('courseGrid').innerHTML.match(/class="course-card"/g)||[]).length,10);
assert.equal(vm.runInContext('courses.every(c => courseProjects[c.id].tasks.length >= 4)',context),true);
assert.equal(vm.runInContext('courses.every(c => quizzes[c.id].length === 3 && quizFor(c).every(q => q.answer >= 0 && q.answer < q.options.length))',context),true);
assert.equal(vm.runInContext('courses.every(c => c.lessons.length >= 3 && courseDetails[c.id] && c.lessons.every(l => l.title && l.text && l.code && l.practice))',context),true);
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
el('dialogContent').oninput({target:{id:'lessonNotes',value:'My notes'}});
assert.equal(store.get('sayanox-notes-python-0'),'My notes');
el('dialogContent').oninput({target:{id:'practiceEditor',value:'print(42)'}});
assert.equal(store.get('sayanox-draft-python-0'),'print(42)');
el('dialogContent').onclick({target:{closest(sel){return sel==='[data-action]'?{dataset:{action:'bookmark'}}:null}}});
assert(JSON.parse(store.get('sayanox-bookmarks'))['sayanox-bookmark-python-0']);
vm.runInContext("currentView='project'; renderDialog()",context);
assert(el('dialogContent').innerHTML.includes('Build it step by step'));
el('dialogContent').onchange({target:{matches(){return true},dataset:{projectTask:'0'},checked:true}});
assert.equal(store.get('sayanox-project-python'),'[0]');
vm.runInContext("currentView='quiz'; renderDialog()",context);
assert(el('dialogContent').innerHTML.includes('id="quizForm"'));
el('dialogContent').onsubmit({target:{id:'quizForm'},preventDefault(){}});
assert.equal(JSON.parse(store.get('sayanox-quiz-scores')).python,2);
assert(el('dialogContent').innerHTML.includes('quiz-explanation'));
vm.runInContext("currentView='lesson'; renderDialog()",context);
for (let i=0;i<5;i++) {
  vm.runInContext(`currentLesson=${i}`,context);
  el('dialogContent').onclick({target:{closest(sel){return sel==='[data-action]'?{dataset:{action:'complete'}}:null}}});
}
vm.runInContext("currentView='certificate'; renderDialog()",context);
assert(el('dialogContent').innerHTML.includes('id="certificateForm"'));
vm.runInContext("printCertificate('<Student>', currentCourse)",context);
assert(printed);
assert(el('printArea').innerHTML.includes('&lt;Student&gt;'));
assert(el('printArea').innerHTML.includes('Sayan Mahata'));
assert(el('printArea').innerHTML.includes('not independently verified'));
// Backup validates known keys and restores only application-owned data.
store.set('unrelated-app-key','keep');
const backup = vm.runInContext('collectBackup()', context);
assert.equal(backup.data['sayanox-notes-python-0'], 'My notes');
assert.equal(backup.data['sayanox-project-python'], '[0]');
assert.equal(backup.data['unrelated-app-key'], undefined);
context.savedBackup = backup;
vm.runInContext('validateBackup(savedBackup)',context);
assert.throws(() => vm.runInContext("validateBackup({format:'sayanox-learning-backup',version:1,data:{'unrelated-app-key':'bad'}})",context), /unsupported entry/);
assert.throws(() => vm.runInContext("validateBackup({format:'sayanox-learning-backup',version:1,data:{'sayanox-progress-v1':'{\"python\":[999]}'}})",context), /Invalid lesson progress/);
store.set('sayanox-notes-python-0','Changed');
vm.runInContext('restoreBackup(savedBackup.data)',context);
assert.equal(store.get('sayanox-notes-python-0'),'My notes');
assert.equal(store.get('unrelated-app-key'),'keep');
// Exercise actual JavaScript worker execution and error reporting without network dependencies.
(async () => {
  const messages = [];
  const workerContext = {self:{postMessage: m => messages.push(m)}};
  vm.createContext(workerContext);
  vm.runInContext(fs.readFileSync('runner-worker.js','utf8'), workerContext);
  await workerContext.self.onmessage({data:{mode:'javascript',code:'console.log("Hello", 42)'}});
  assert.equal(messages.pop().output, 'Hello 42');
  await workerContext.self.onmessage({data:{mode:'javascript',code:'throw new Error("bad code")'}});
  assert.match(messages.pop().output, /bad code/);
  console.log('Smoke tests passed: classroom, projects, notes, quiz, backup validation, certificate and JS runner.');
})().catch(e => {console.error(e); process.exitCode=1;});
