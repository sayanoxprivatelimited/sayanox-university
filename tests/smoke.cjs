const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const elements = {};
function el(id) {
  return elements[id] ??= {innerHTML:'', textContent:'', hidden:false, open:false, dataset:{}, classList:{toggle(){return false}, remove(){}}, addEventListener(type, fn){this['on'+type]=fn}, setAttribute(){}, showModal(){this.open=true}, close(){this.open=false}};
}
const filters = ['all','programming','web','fundamentals'].map(x => ({dataset:{filter:x}, classList:{toggle(){}}, addEventListener(type,fn){this.fn=fn}}));
let printed = false;
const context = {document:{getElementById:el,querySelectorAll:()=>filters},localStorage:{getItem(){return null},setItem(){}},window:{print(){printed=true}},Intl,Date,console};
vm.createContext(context);
vm.runInContext(fs.readFileSync('app.js','utf8'), context);
assert.equal(vm.runInContext('courses.length',context),10);
assert.equal((el('courseGrid').innerHTML.match(/class="course-card"/g)||[]).length,10);
assert.equal(vm.runInContext('courses.every(c => c.lessons.length === 3 && c.lessons.every(l => l.title && l.text && l.code && l.practice))',context),true);
filters[2].fn();
assert.equal((el('courseGrid').innerHTML.match(/class="course-card"/g)||[]).length,2);
vm.runInContext("openCourse('python')",context);
assert(el('courseDialog').open);
assert(!el('dialogContent').innerHTML.includes('certificateForm"'));
for (let i=0;i<3;i++) {
  vm.runInContext(`currentLesson=${i}`,context);
  el('dialogContent').onclick({target:{closest(sel){return sel==='[data-action]'?{dataset:{action:'complete'}}:null}}});
}
assert(el('dialogContent').innerHTML.includes('certificateForm'));
vm.runInContext("printCertificate('<Student>', currentCourse)",context);
assert(printed);
assert(el('printArea').innerHTML.includes('&lt;Student&gt;'));
assert(el('printArea').innerHTML.includes('Sayan Mahata'));
assert(el('printArea').innerHTML.includes('not independently verified'));
console.log('Smoke tests passed: courses, filters, lessons, completion and certificate.');
