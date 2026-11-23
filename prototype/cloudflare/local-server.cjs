// An ephemeral, loopback-only test server. Never bind this to the internet.
const {Miniflare} = require('miniflare');
const fs = require('node:fs'), path = require('node:path');
(async () => {
  const mf = new Miniflare({modules:true, script:fs.readFileSync(path.join(__dirname,'worker.mjs'),'utf8'), compatibilityDate:'2025-04-01', d1Databases:['DB'], bindings:{DEV_ONLY:'true'}, host:'127.0.0.1', port:8787});
  try {
    const db = await mf.getD1Database('DB');
    const sql = fs.readFileSync(path.join(__dirname,'migrations/0001_local.sql'),'utf8').replace(/^--.*$/gm,'');
    for (const statement of sql.split(';').map(text => text.trim()).filter(Boolean)) await db.prepare(statement).run();
    await mf.ready;
    console.log('Local-only prototype: http://127.0.0.1:8787 (ephemeral data; Ctrl+C to stop).');
    const shutdown = async () => { await mf.dispose(); process.exit(0); };
    process.once('SIGINT',shutdown); process.once('SIGTERM',shutdown);
  } catch (error) { await mf.dispose(); throw error; }
})().catch(() => { console.error('Could not start local prototype.'); process.exitCode = 1; });
