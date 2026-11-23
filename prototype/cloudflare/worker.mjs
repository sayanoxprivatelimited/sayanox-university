// PRIVATE LOCAL PROTOTYPE. This intentionally refuses non-local URLs.
// This is not production authentication, a verified assessment, or a live API.
const courses = Object.freeze({python:'Python Basics',rust:'Getting Started with Rust',c:'C Programming',web:'HTML & CSS Essentials',javascript:'JavaScript Basics',cs:'Computer Science Foundations',go:'Go Fundamentals',sql:'SQL & Databases',git:'Git & Collaboration',ai:'AI Foundations'});
const maxBody = 128 * 1024;
const backupFixedKeys = new Set(['sayanox-progress-v1','sayanox-quiz-scores','sayanox-bookmarks','sayanox-last-course','sayanox-certificates-v1','sayanox-study-v1','sayanox-lesson-language','sayanox-weekly-goal','sayanox-editor-font-size','sayanox-editor-wrap']);
function validBackupKey(key) {
  if (backupFixedKeys.has(key)) return true;
  const match = /^sayanox-(project|notes|draft|challenge)-([a-z]+)(?:-(\d+))?$/.exec(key);
  return Boolean(match && Object.hasOwn(courses,match[2]) && (match[1] === 'project' ? match[3] === undefined : match[3] !== undefined && Number(match[3]) <= 100));
}
const headers = {'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff','referrer-policy':'no-referrer'};
const reply = (status, body) => new Response(JSON.stringify(body), {status, headers});
const problem = (status, message) => reply(status, {error:message});
const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const validKeys = (object, keys) => isObject(object) && Object.keys(object).every(key => keys.includes(key));
const hex = bytes => Array.from(bytes, n => n.toString(16).padStart(2,'0')).join('');
function randomHex(bytes) { return hex(crypto.getRandomValues(new Uint8Array(bytes))); }
async function sha256(value) { return hex(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)))); }
async function bodyJson(request) {
  if (!/^application\/json(?:\s*;|\s*$)/i.test(request.headers.get('content-type') || '')) throw new Error('content-type');
  const declared = request.headers.get('content-length');
  if (declared && (!/^\d+$/.test(declared) || Number(declared) > maxBody)) throw new Error('size');
  if (!request.body) throw new Error('json');
  const reader = request.body.getReader(), parts = []; let size = 0;
  while (true) {
    const {done, value} = await reader.read(); if (done) break;
    size += value.length; if (size > maxBody) { await reader.cancel(); throw new Error('size'); }
    parts.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const part of parts) { bytes.set(part,offset); offset += part.length; }
  try { return JSON.parse(new TextDecoder('utf-8', {fatal:true}).decode(bytes)); }
  catch { throw new Error('json'); }
}
function validBackup(backup) {
  return validKeys(backup, ['format','version','createdAt','data']) && backup.format === 'sayanox-learning-backup' && backup.version === 1 &&
    (backup.createdAt === undefined || (typeof backup.createdAt === 'string' && backup.createdAt.length <= 64)) &&
    isObject(backup.data) && Object.keys(backup.data).length <= 500 && Object.entries(backup.data).every(([key,value]) => validBackupKey(key) && typeof value === 'string' && (!/^sayanox-(notes|draft|challenge)-/.test(key) || value.length <= 20000));
}
async function authenticate(request, env) {
  const match = /^Bearer (su_dev_[0-9a-f]{64})$/.exec(request.headers.get('authorization') || '');
  if (!match) return null;
  const hash = await sha256(match[1]);
  return env.DB.prepare('SELECT id, backup, revision FROM accounts WHERE token_hash = ?').bind(hash).first();
}
function localOnly(request, env) {
  const url = new URL(request.url), origin = request.headers.get('origin');
  return env.DEV_ONLY === 'true' && url.protocol === 'http:' && (url.hostname === 'localhost' || url.hostname === '127.0.0.1') && (!origin || origin === url.origin);
}
async function handle(request, env) {
  if (!localOnly(request, env)) return problem(403,'Local prototype only.');
  const url = new URL(request.url), path = url.pathname, method = request.method;
  if (url.search) return problem(400,'Query strings are not accepted.');
  if (path === '/api/dev/health' && method === 'GET') return reply(200,{status:'local-prototype-only'});
  if (!env.DB) return problem(503,'Local database unavailable.');
  if (path === '/api/dev/accounts' && method === 'POST') {
    const token = `su_dev_${randomHex(32)}`, id = randomHex(16), hash = await sha256(token);
    await env.DB.prepare('INSERT INTO accounts (id, token_hash, created_at) VALUES (?, ?, ?)').bind(id,hash,new Date().toISOString()).run();
    return reply(201,{token,notice:'Local prototype token. Store securely; it cannot be recovered.'});
  }
  const lookup = /^\/api\/dev\/certificates\/(SUP-[0-9A-F]{32})$/.exec(path);
  if (lookup && method === 'GET') {
    const record = await env.DB.prepare('SELECT id, student_name, course_id, issued_at FROM certificates WHERE id = ?').bind(lookup[1]).first();
    if (!record) return problem(404,'No local prototype record found.');
    return reply(200,{id:record.id, studentName:record.student_name, course:courses[record.course_id], issuedAt:record.issued_at, notice:'Local prototype record only. It does not verify identity, completion, mastery, proctoring or accreditation.'});
  }
  if (!['/api/dev/backup','/api/dev/account','/api/dev/certificates'].includes(path)) return problem(404,'Not found.');
  if (!((path === '/api/dev/backup' && ['GET','PUT'].includes(method)) || (path === '/api/dev/account' && method === 'DELETE') || (path === '/api/dev/certificates' && method === 'POST'))) return problem(405,'Method not allowed.');
  const account = await authenticate(request, env);
  if (!account) return problem(401,'Invalid or missing token.');
  if (path === '/api/dev/account') {
    // Delete certificates explicitly; do not rely on connection-level PRAGMA settings.
    await env.DB.batch([env.DB.prepare('DELETE FROM certificates WHERE account_id = ?').bind(account.id),env.DB.prepare('DELETE FROM accounts WHERE id = ?').bind(account.id)]);
    return reply(200,{deleted:true});
  }
  if (path === '/api/dev/backup' && method === 'GET') return reply(200,{revision:account.revision,backup:account.backup === null ? null : JSON.parse(account.backup)});
  let data;
  try { data = await bodyJson(request); }
  catch (error) { return problem(error.message === 'size' ? 413 : error.message === 'content-type' ? 415 : 400,'Invalid JSON request.'); }
  if (path === '/api/dev/backup') {
    if (!validKeys(data,['revision','backup']) || !Number.isSafeInteger(data.revision) || data.revision < 0 || !validBackup(data.backup)) return problem(400,'Invalid backup or revision.');
    const updated = await env.DB.prepare('UPDATE accounts SET backup = ?, revision = revision + 1 WHERE id = ? AND revision = ? RETURNING revision').bind(JSON.stringify(data.backup),account.id,data.revision).first();
    if (!updated) return problem(409,'Revision conflict. Fetch the current backup before deciding what to overwrite.');
    return reply(200,{revision:updated.revision});
  }
  if (!validKeys(data,['studentName','courseId','publicConsent']) || typeof data.studentName !== 'string' || data.studentName.trim().length < 1 || data.studentName.trim().length > 80 || /[\u0000-\u001f\u007f]/.test(data.studentName) || !Object.hasOwn(courses,data.courseId) || data.publicConsent !== true) return problem(400,'Name, supported course, and public-record consent are required.');
  const id = `SUP-${randomHex(16).toUpperCase()}`, issuedAt = new Date().toISOString();
  // Bounded local prototype data; not a substitute for production abuse controls.
  const inserted = await env.DB.prepare('INSERT INTO certificates (id, account_id, student_name, course_id, issued_at) SELECT ?, ?, ?, ?, ? WHERE (SELECT COUNT(*) FROM certificates WHERE account_id = ?) < 3 RETURNING id').bind(id,account.id,data.studentName.trim(),data.courseId,issuedAt,account.id).first();
  if (!inserted) return problem(429,'Local prototype limit reached.');
  return reply(201,{id,notice:'Public local prototype record, not proof of identity or achievement.'});
}
export default {
  async fetch(request, env) {
    try { return await handle(request,env); }
    catch { return problem(500,'Local prototype error.'); }
  }
};
