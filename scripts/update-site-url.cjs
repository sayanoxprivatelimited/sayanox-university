// Run only when the canonical public URL changes. The deployed site is static.
const fs = require('node:fs');
const base = fs.readFileSync('site-url.txt', 'utf8').trim();
const url = new URL(base);
if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash || !base.endsWith('/') || url.href !== base) throw Error('site-url.txt must contain an HTTPS base URL ending in /');
const index = fs.readFileSync('index.html', 'utf8')
  .replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${base}$2`)
  .replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${base}$2`);
fs.writeFileSync('index.html', index);
const pages = ['', 'courses.html', 'roadmap/', 'about/', 'contact/', 'privacy/', 'terms/', 'verify/'];
const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
fs.writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${escape(new URL(page, base).href)}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', base).href}\n`);
