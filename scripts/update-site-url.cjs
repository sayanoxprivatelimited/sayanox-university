// Run only when the canonical public URL changes. The deployed site is static.
const fs = require('node:fs');
const base = fs.readFileSync('site-url.txt', 'utf8').trim();
const url = new URL(base);
if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash || !base.endsWith('/') || url.href !== base) throw Error('site-url.txt must contain an HTTPS base URL ending in /');
const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pages = [
  ['index.html', ''], ['courses.html', 'courses.html'], ['roadmap/index.html', 'roadmap/'],
  ['about/index.html', 'about/'], ['contact/index.html', 'contact/'],
  ['privacy/index.html', 'privacy/'], ['terms/index.html', 'terms/'], ['verify/index.html', 'verify/']
];
for (const [file, path] of pages) {
  const pageUrl = escape(new URL(path, base).href);
  const imageUrl = escape(new URL('social-card.png', base).href);
  let content = fs.readFileSync(file, 'utf8');
  for (const [pattern, value] of [
    [/(<link\b[^>]*\brel="canonical"\s+href=")[^"]*(")/, pageUrl],
    [/(<meta property="og:url" content=")[^"]*(")/, pageUrl],
    [/(<meta property="og:image" content=")[^"]*(")/, imageUrl],
    [/(<meta name="twitter:image" content=")[^"]*(")/, imageUrl]
  ]) {
    if (!pattern.test(content)) throw Error(`Missing SEO metadata in ${file}`);
    content = content.replace(pattern, (_, before, after) => before + value + after);
  }
  if (file === 'courses.html') content = content.replace(/(<link itemprop="url" href=")[^"]*courses\.html#([a-z]+)(")/g, (_, before, id, after) => before + escape(new URL('courses.html#' + id, base).href) + after);
  if (file === 'index.html') content = content.replace(/(<link itemprop="url" href=")[^"]*(")/, (_, before, after) => before + escape(base) + after);
  fs.writeFileSync(file, content);
}
fs.writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(([, path]) => `  <url><loc>${escape(new URL(path, base).href)}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', base).href}\n`);
