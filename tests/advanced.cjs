const fs=require('node:fs'), assert=require('node:assert/strict'), cp=require('node:child_process'), os=require('node:os'), path=require('node:path'), vm=require('node:vm');
const courses=JSON.parse(fs.readFileSync('advanced/content.json','utf8'));
const catalogContext=vm.createContext({}); vm.runInContext(fs.readFileSync('advanced/catalog.js','utf8'),catalogContext);
const catalog=vm.runInContext('advancedCatalog',catalogContext);
assert.deepEqual(courses.map(c=>c.id),['python-intermediate','python-backend','advanced-c','rust-intermediate','advanced-web','devops-practical','practical-ai']);
assert.equal(courses.reduce((n,c)=>n+c.lessons.length,0),42);
for(const course of courses) for(const lesson of course.lessons) for(const key of ['title','concept','code','walkthrough','practice','question','answer']) assert(lesson[key] && lesson[key].length >= (key === "title" ? 3 : 10),`${course.id}: ${key}`);
cp.execFileSync(process.execPath,['scripts/update-advanced.cjs','--check']);
const python=courses[0].lessons, results=['Python: 25 minutes\n','Read (20 min)\n','Calling add\n5\n','Block 1\nBlock 2\n','start\nready\ncleanup\n',"['Done: A', 'Done: B']\n",'',"{'done': False}\n[{'title': 'Read', 'minutes': '20'}]\n"];
for(const [i,lesson] of python.slice(0,8).entries()) assert.equal(cp.execFileSync('python3',['-c',lesson.code],{encoding:'utf8',timeout:10000}),results[i],lesson.title);
assert.equal(cp.execFileSync('python3',['-c',python[8].code],{encoding:'utf8'}),"Goal(title='Read', minutes=30)\n");
cp.execFileSync('python3',['-c',python[9].code],{encoding:'utf8'});
const extras=JSON.parse(fs.readFileSync('advanced/enrichment.json','utf8'));
assert.deepEqual(Object.keys(extras).sort(),courses.map(c=>c.id).sort());
for(const course of courses) {
 const {project,quiz}=extras[course.id]; assert(project.steps.length>=4); assert(quiz.length>=3);
 assert.equal(catalog[course.id].lessons,course.lessons.length); assert.equal(catalog[course.id].tasks,project.steps.length); assert.equal(catalog[course.id].questions,quiz.length);
 for(const q of quiz) assert(q.question && q.explanation && q.options.length>=2 && Number.isInteger(q.answer) && q.answer>=0 && q.answer<q.options.length);
}
// Compile Python snippets that need external packages without importing those packages.
for(const lesson of [...courses[1].lessons.slice(0,4),courses[1].lessons[5],courses[6].lessons[0],courses[6].lessons[3]]) cp.execFileSync('python3',['-c','import ast,sys; ast.parse(sys.stdin.read())'],{input:lesson.code,encoding:'utf8'});
new vm.Script(courses[4].lessons[1].code); // browser fetch example syntax only
if(cp.spawnSync('gcc',['--version'],{stdio:'ignore'}).status===0){
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'su-advanced-'));
 try{for(const [i,lesson] of courses[2].lessons.entries()) { const src=path.join(dir,`${i}.c`),bin=path.join(dir,`${i}`);fs.writeFileSync(src,lesson.code);cp.execFileSync('gcc',['-std=c11','-Wall','-Wextra','-Werror',src,'-o',bin]);assert.equal(cp.execFileSync(bin,[],{encoding:'utf8'}),['2\n','C: 25\n','study\n','7\n','42\n'][i]); }}finally{fs.rmSync(dir,{recursive:true,force:true});}
}
const html=fs.readFileSync('advanced/index.html','utf8');assert(html.includes('Publicly verifiable certificates for these paths are not available yet'));assert(!html.includes('verified certificate available'));
console.log('Advanced curriculum, static generation and runnable Python/C examples passed.');
