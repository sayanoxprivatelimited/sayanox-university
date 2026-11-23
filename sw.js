// Bump this cache version whenever any listed static asset changes.
const CACHE = 'sayanox-static-v6';
const FILES = ['./', 'index.html', 'courses.html', 'course-reading.js', 'styles.css', 'favicon.svg', 'social-card.png', 'manifest.webmanifest', 'theme.js', 'course-details.js', 'quizzes.js', 'projects.js', 'challenges.js', 'lesson-extras.js', 'app.js', 'study.js', 'backup.js', 'offline.js', 'runner-worker.js', 'preview.html', 'verify/', 'verify.js', 'roadmap/', 'about/', 'contact/', 'privacy/', 'terms/', 'vendor/pyodide/pyodide.js', 'vendor/pyodide/pyodide.asm.js', 'vendor/pyodide/pyodide.asm.wasm', 'vendor/pyodide/python_stdlib.zip', 'vendor/pyodide/pyodide-lock.json', 'vendor/sqljs/sql-wasm.js', 'vendor/sqljs/sql-wasm.wasm'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('sayanox-static-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(response => {
    if (response) return response;
    const url = new URL(event.request.url);
    if (event.request.mode === 'navigate' && /\/(verify|roadmap|about|contact|privacy|terms)$/.test(url.pathname)) return caches.match(`${url.origin}${url.pathname}/`).then(cached => cached || fetch(event.request));
    return fetch(event.request);
  }));
});
