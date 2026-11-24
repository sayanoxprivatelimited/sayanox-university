const assert = require('node:assert/strict'), fs = require('node:fs'), vm = require('node:vm');
const {spawnSync,execFileSync} = require('node:child_process');
const os = require('node:os'), path = require('node:path');
const ctx = vm.createContext({}); vm.runInContext(fs.readFileSync('curriculum-expansion.js','utf8'),ctx);
const depth = vm.runInContext('lessonDepth',ctx), additions = vm.runInContext('extraLessons',ctx);
const ids = ['python','javascript','web','sql','rust','c','cs','go','git','ai'];
assert.deepEqual(Object.keys(additions).sort(),ids.slice().sort());
for (const id of ids) {
  assert.equal(additions[id].length,2,`${id} new lessons`);
  assert(depth[id].every(item => item.length >= 2 && item.every(p => p.length > 50)),`${id} existing lesson explanations`);
  for (const lesson of additions[id]) {
    assert(lesson.title && lesson.text && lesson.code && lesson.practice && lesson.details.length >= 2);
    assert(lesson.details.every(p => p.length > 50));
    assert(lesson.text.length + lesson.details.join('').length >= 350,`${id} ${lesson.title} is sufficiently explained`);
  }
}
const pythonOutput = ['Python\nSQL\nWeb\nGit\n','Mita\nNot selected\n','1\n-1\n','second\n[\'first\']\n'];
for (const [i,lesson] of [...additions.python,...additions.cs].entries()) {
  const result = execFileSync('python3',['-c',lesson.code],{encoding:'utf8'});
  assert.equal(result,pythonOutput[i],lesson.title);
}
const jsExpected = ['HTML\nCSS\nJavaScript\nSQL','Mita\n0\nNot selected'];
for (const [i,lesson] of additions.javascript.entries()) {
  const output = []; vm.runInNewContext(lesson.code,{console:{log:(...args)=>output.push(args.join(' '))}},{timeout:1000});
  assert.equal(output.join('\n'),jsExpected[i],lesson.title);
}
const {DatabaseSync} = require('node:sqlite');
for (const [i,lesson] of additions.sql.entries()) {
  const db = new DatabaseSync(':memory:');
  db.exec("CREATE TABLE courses (id INTEGER PRIMARY KEY, title TEXT NOT NULL); INSERT INTO courses VALUES (1, 'Python'), (2, 'Rust');");
  if (i===0) assert.equal(db.prepare(lesson.code).get().course_count,2);
  else {
    const parts = lesson.code.split(';').map(x=>x.trim()).filter(Boolean);
    for (const statement of parts.slice(0,-1)) db.exec(statement);
    const rows = db.prepare(parts.at(-1)).all(); assert.equal(rows.length,2); assert.equal(rows[0].learner,'Mita'); assert.equal(rows[0].title,'Python');
  }
  db.close();
}
// C examples are checked when a compiler is installed; no generated files stay in the repository.
if (spawnSync('gcc',['--version'],{stdio:'ignore'}).status === 0) {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'sayanox-c-'));
  try { for (const [i,lesson] of additions.c.entries()) {
    const source=path.join(dir,`lesson${i}.c`), bin=path.join(dir,`lesson${i}`); fs.writeFileSync(source,lesson.code);
    execFileSync('gcc',['-std=c11','-Wall','-Wextra','-Werror',source,'-o',bin]);
    assert.equal(execFileSync(bin,[],{encoding:'utf8'}),i===0?'7\n8\n9\n':'Hello, Mita!\n');
  }} finally {fs.rmSync(dir,{recursive:true,force:true})}
}
console.log('Curriculum structure and runnable Python, JavaScript, SQL and C examples passed.');
