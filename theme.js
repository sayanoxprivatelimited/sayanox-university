(function () {
  const key = 'sayanox-theme';
  let saved = null;
  try { saved = localStorage.getItem(key); } catch {}
  const dark = saved === 'dark' || (saved !== 'light' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('themeToggle');
    if (!button) return;
    function update() {
      const active = document.documentElement.dataset.theme === 'dark';
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', active ? 'Switch to light mode' : 'Switch to dark mode');
      button.textContent = active ? '☀ Light mode' : '☾ Dark mode';
    }
    button.addEventListener('click', () => {
      document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, document.documentElement.dataset.theme); } catch {}
      update();
    });
    update();
  });
}());
