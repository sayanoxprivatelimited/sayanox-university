/* Each run gets a fresh worker; the page terminates it on completion or timeout. */
self.onmessage = async ({ data }) => {
  const { mode, code, seed } = data;
  const output = [];
  const write = (...args) => { output.push(args.map(value => {
    if (typeof value === 'string') return value;
    try { return JSON.stringify(value); } catch { return String(value); }
  }).join(' ')); };
  try {
    if (mode === 'javascript') {
      // The worker has no DOM; console output is returned to the editor.
      const console = { log: write, info: write, warn: write, error: write };
      const result = await (async () => eval(code))();
      if (result !== undefined) write(result);
    } else if (mode === 'python') {
      self.postMessage({ status: 'Loading Python runtime…' });
      importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js');
      const pyodide = await loadPyodide({ stdout: write, stderr: write });
      await pyodide.runPythonAsync(code);
    } else if (mode === 'sql') {
      self.postMessage({ status: 'Loading SQLite runtime…' });
      importScripts('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js');
      const SQL = await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}` });
      const db = new SQL.Database();
      if (seed) db.run("CREATE TABLE courses (id INTEGER PRIMARY KEY, title TEXT NOT NULL); INSERT INTO courses VALUES (1, 'Python'), (2, 'Rust');");
      const results = db.exec(code);
      for (const result of results) {
        write(result.columns.join(' | '));
        for (const row of result.values) write(row.join(' | '));
      }
      if (!results.length) write('Query completed successfully. No rows to display.');
      db.close();
    } else throw new Error('This language cannot run in the browser editor.');
    self.postMessage({ output: output.join('\n') || 'Program finished with no output.' });
  } catch (error) {
    self.postMessage({ output: `${output.length ? output.join('\n') + '\n' : ''}Error: ${error && error.message ? error.message : String(error)}\nIf the runtime could not load, check your internet connection.` });
  }
};
