// Runs real local Workerd/D1, without a Cloudflare account or external calls.
const {Miniflare} = require('miniflare');
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
(async () => {
  const mf = new Miniflare({modules:true, script:fs.readFileSync(path.join(__dirname,'worker.mjs'),'utf8'), compatibilityDate:'2025-04-01', d1Databases:['DB'], bindings:{DEV_ONLY:'true'}});
  try {
    const db = await mf.getD1Database('DB');
    const sql = fs.readFileSync(path.join(__dirname,'migrations/0001_local.sql'),'utf8').replace(/^--.*$/gm,'');
    for (const statement of sql.split(';').map(text=>text.trim()).filter(Boolean)) await db.prepare(statement).run();
    let response = await mf.dispatchFetch('http://localhost:8787/api/dev/accounts',{method:'POST'});
    assert.equal(response.status,201); const {token} = await response.json();
    const headers = {authorization:`Bearer ${token}`,'content-type':'application/json'};
    const backup = {format:'sayanox-learning-backup',version:1,data:{'sayanox-notes-python-0':'private local text'}};
    response = await mf.dispatchFetch('http://localhost:8787/api/dev/backup',{method:'PUT',headers,body:JSON.stringify({revision:0,backup})}); assert.equal(response.status,200);
    response = await mf.dispatchFetch('http://localhost:8787/api/dev/backup',{method:'PUT',headers,body:JSON.stringify({revision:0,backup})}); assert.equal(response.status,409);
    const races = await Promise.all([1,2].map(() => mf.dispatchFetch('http://localhost:8787/api/dev/backup',{method:'PUT',headers,body:JSON.stringify({revision:1,backup})})));
    assert.deepEqual(races.map(result=>result.status).sort(),[200,409]);
    response = await mf.dispatchFetch('http://localhost:8787/api/dev/backup',{headers}); assert.deepEqual((await response.json()).backup,backup);
    response = await mf.dispatchFetch('http://localhost:8787/api/dev/certificates',{method:'POST',headers,body:JSON.stringify({studentName:'Learner',courseId:'python',publicConsent:true})}); assert.equal(response.status,201); const {id} = await response.json();
    response = await mf.dispatchFetch(`http://localhost:8787/api/dev/certificates/${id}`); assert.equal(response.status,200);
    response = await mf.dispatchFetch('http://localhost:8787/api/dev/account',{method:'DELETE',headers}); assert.equal(response.status,200);
    response = await mf.dispatchFetch(`http://localhost:8787/api/dev/certificates/${id}`); assert.equal(response.status,404);
    response = await mf.dispatchFetch('https://example.com/api/dev/health'); assert.equal(response.status,403);
    console.log('Local Workerd/D1 integration passed.');
  } finally { await mf.dispose(); }
})().catch(error=>{console.error(error);process.exitCode=1});
