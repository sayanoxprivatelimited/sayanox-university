// Enhance static examples without changing the JavaScript-free reading page.
document.querySelectorAll('.static-course pre').forEach(pre => {
  const code = pre.querySelector('code');
  if (!code) return;
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'static-copy-code'; button.textContent = 'Copy code';
  const status = document.createElement('span');
  status.className = 'static-copy-status'; status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
  button.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = 'Code copied.';
    } catch { status.textContent = 'Could not copy. Select the code and copy it manually.'; }
  });
  pre.insertAdjacentElement('afterend', status);
  pre.insertAdjacentElement('afterend', button);
});
