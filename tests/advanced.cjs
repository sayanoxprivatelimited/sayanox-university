const fs=require('node:fs'), assert=require('node:assert/strict'), cp=require('node:child_process'), os=require('node:os'), path=require('node:path'), vm=require('node:vm');
const courses=JSON.parse(fs.readFileSync('advanced/content.json','utf8'));
assert.deepEqual(courses.map(c=>c.id),['python-intermediate','python-backend','advanced-c','rust-intermediate','advanced-web','devops-practical','practical-ai']);
assert.equal(courses.reduce((n,c)=>n+c.lessons.length,0),28);
for(const course of courses) for(const lesson of course.lessons) for(const key of ['title','concept','code','walkthrough','practice','question','answer']) assert(lesson[key] && lesson[key].length >= (key === "title" ? 3 : 10),`${course.id}: ${key}`);
cp.execFileSync(process.execPath,['scripts/update-advanced.cjs','--check']);
const python=courses[0].lessons, results=['Python: 25 minutes\n','Read (20 min)\n','Calling add\n5\n','Block 1\nBlock 2\n','start\nready\ncleanup\n',"['Done: A', 'Done: B']\n",'',"{'done': False}\n[{'title': 'Read', 'minutes': '20'}]\n"];
for(const [i,lesson] of python.entries()) assert.equal(cp.execFileSync('python3',['-c',lesson.code],{encoding:'utf8',timeout:10000}),results[i],lesson.title);
// Compile Python snippets that need external packages without importing those packages.
for(const lesson of [...courses[1].lessons.slice(0,4),courses[6].lessons[0]]) cp.execFileSync('python3',['-c','import ast,sys; ast.parse(sys.stdin.read())'],{input:lesson.code,encoding:'utf8'});
new vm.Script(courses[4].lessons[1].code); // browser fetch example syntax only
if(cp.spawnSync('gcc',['--version'],{stdio:'ignore'}).status===0){
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'su-advanced-'));
 try{for(const [i,lesson] of courses[2].lessons.entries()) { const src=path.join(dir,`${i}.c`),bin=path.join(dir,`${i}`);fs.writeFileSync(src,lesson.code);cp.execFileSync('gcc',['-std=c11','-Wall','-Wextra','-Werror',src,'-o',bin]);assert.equal(cp.execFileSync(bin,[],{encoding:'utf8'}),['2\n','C: 25\n','study\n'][i]); }}finally{fs.rmSync(dir,{recursive:true,force:true});}
}
const html=fs.readFileSync('advanced/index.html','utf8');assert(html.includes('Publicly verifiable certificates for these paths are not available yet'));assert(!html.includes('verified certificate available'));
console.log('Advanced curriculum, static generation and runnable Python/C examples passed.');
