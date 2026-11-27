// Runs the Worker against real SQLite with a small D1-compatible test adapter.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const {DatabaseSync} = require('node:sqlite');
const database = new DatabaseSync(':memory:');
database.exec(fs.readFileSync('prototype/cloudflare/migrations/0001_local.sql','utf8'));
class Statement {
  constructor(sql) { this.sql = sql; this.args = []; }
  bind(...args) { this.args = args; return this; }
  async first() { return database.prepare(this.sql).get(...this.args) || null; }
  async run() { return database.prepare(this.sql).run(...this.args); }
}
const db = {prepare:sql => new Statement(sql), async batch(statements) { database.exec('BEGIN'); try { const results = []; for (const statement of statements) results.push(await statement.run()); database.exec('COMMIT'); return results; } catch (error) { database.exec('ROLLBACK'); throw error; } }};
(async () => {
 const worker = (await import('../prototype/cloudflare/worker.mjs')).default, env = {DEV_ONLY:'true', DB:db};
 async function call(path, {method='GET', token, body, origin, url='http://localhost:8787', extraHeaders={}} = {}) {
  const headers = {...extraHeaders}; if (token) headers.authorization = `Bearer ${token}`; if (origin) headers.origin = origin;
  let payload; if (body !== undefined) { payload = typeof body === 'string' ? body : JSON.stringify(body); if (!headers['content-type']) headers['content-type']='application/json'; }
  const response = await worker.fetch(new Request(url+path,{method,headers,body:payload}),env);
  assert.equal(response.headers.get('cache-control'),'no-store'); assert.equal(response.headers.get('x-content-type-options'),'nosniff');
  return {status:response.status, json:await response.json()};
 }
 assert.equal((await call('/api/dev/health')).status,200);
 assert.equal((await call('/api/dev/health',{url:'https://example.com'})).status,403);
 assert.equal((await call('/api/dev/accounts',{method:'POST',origin:'https://evil.example'})).status,403);
 assert.equal((await worker.fetch(new Request('http://localhost:8787/api/dev/health'),{DEV_ONLY:'false',DB:db})).status,403);
 assert.equal((await call('/api/dev/accounts?token=leak',{method:'POST'})).status,400);
 assert.equal((await call('/api/dev/backup')).status,401);
 const first = await call('/api/dev/accounts',{method:'POST'}), second = await call('/api/dev/accounts',{method:'POST'});
 assert.equal(first.status,201); assert.match(first.json.token,/^su_dev_[0-9a-f]{64}$/); assert.notEqual(first.json.token,second.json.token);
 const token = first.json.token, token2 = second.json.token;
 assert.equal(database.prepare('SELECT count(*) AS n FROM accounts WHERE token_hash = ?').get(token).n,0);
 const backup = {format:'sayanox-learning-backup',version:1,createdAt:'2026-01-01T00:00:00.000Z',data:{'sayanox-notes-python-0':'private','sayanox-editor-font-size':'18','sayanox-editor-wrap':'off'}}, another = {format:'sayanox-learning-backup',version:1,data:{'sayanox-notes-python-0':'other'}};
 assert.deepEqual((await call('/api/dev/backup',{token})).json,{revision:0,backup:null});
 assert.deepEqual((await call('/api/dev/backup',{method:'PUT',token,body:{revision:0,backup}})).json,{revision:1});
 assert.deepEqual((await call('/api/dev/backup',{token})).json,{revision:1,backup});
 assert.deepEqual((await call('/api/dev/backup',{token:token2})).json,{revision:0,backup:null});
 assert.equal((await call('/api/dev/backup',{method:'PUT',token,body:{revision:0,backup:another}})).status,409);
 assert.deepEqual((await call('/api/dev/backup',{token})).json,{revision:1,backup});
 assert.equal((await call('/api/dev/backup',{method:'PUT',token,body:{revision:1,backup:{...backup,data:{'other-app-key':'bad'}}}})).status,400);
 assert.equal((await call('/api/dev/backup',{method:'PUT',token,body:{revision:1,backup:{...backup,data:{'sayanox-password':'secret'}}}})).status,400);
 assert.equal((await call('/api/dev/backup',{method:'PUT',token,body:{revision:1,backup:{...backup,data:{'sayanox-notes-unknown-0':'bad'}}}})).status,400);
 assert.equal((await call('/api/dev/backup',{method:'PUT',token,body:{revision:1,backup:{...backup,data:{'sayanox-notes-python-0':'x'.repeat(20001)}}}})).status,400);
 assert.equal((await call('/api/dev/backup',{method:'PUT',token,body:'{'})).status,400);
 assert.equal((await call('/api/dev/backup',{method:'PUT',token,body:'{}',extraHeaders:{'content-type':'text/plain'}})).status,415);
 assert.equal((await call('/api/dev/backup',{method:'PUT',token,body:' '.repeat(128*1024+1)})).status,413);
 assert.equal((await call('/api/dev/backup',{method:'POST',token})).status,405);
 assert.equal((await call('/api/dev/certificates',{method:'POST',token,body:{studentName:'A',courseId:'python'}})).status,400);
 assert.equal((await call('/api/dev/certificates',{method:'POST',token,body:{studentName:'A',courseId:'__proto__',publicConsent:true}})).status,400);
 const cert = await call('/api/dev/certificates',{method:'POST',token,body:{studentName:' <script>alert(1)</script> ',courseId:'python',publicConsent:true}});
 assert.equal(cert.status,201); assert.match(cert.json.id,/^SUP-[0-9A-F]{32}$/);
 const publicRecord = await call('/api/dev/certificates/'+cert.json.id);
 assert.equal(publicRecord.json.studentName,'<script>alert(1)</script>'); assert.match(publicRecord.json.notice,/does not verify identity/);
 assert.equal(publicRecord.json.course,'Python Basics'); assert.equal(publicRecord.json.token,undefined);
 for (const courseId of ['python-intermediate','intermediate-programme-v1']) { const issued = await call('/api/dev/certificates',{method:'POST',token:token2,body:{studentName:'Test learner',courseId,publicConsent:true}}); assert.equal(issued.status,201); const record = await call('/api/dev/certificates/'+issued.json.id); assert.equal(record.status,200); assert.match(record.json.notice,/does not verify identity, completion/); assert.match(record.json.course,/Python Intermediate|Intermediate Learning Programme/); }

 for (let i=0;i<11;i++) assert.equal((await call('/api/dev/certificates',{method:'POST',token,body:{studentName:'Person',courseId:'web',publicConsent:true}})).status,201);
 assert.equal((await call('/api/dev/certificates',{method:'POST',token,body:{studentName:'Person',courseId:'web',publicConsent:true}})).status,429);
 assert.equal((await call('/api/dev/certificates/SUP-00000000000000000000000000000000')).status,404);
 assert.equal((await call('/api/dev/account',{method:'DELETE',token})).json.deleted,true);
 assert.equal((await call('/api/dev/certificates/'+cert.json.id)).status,404);
 assert.equal((await call('/api/dev/backup',{token})).status,401);
 assert.equal((await call('/api/dev/backup',{token:token2})).status,200);
 database.close(); console.log('Local Cloudflare prototype API tests passed.');
})().catch(error=>{console.error(error);process.exitCode=1});
