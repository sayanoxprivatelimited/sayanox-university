if ('serviceWorker' in navigator && window.isSecureContext) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      const status = document.getElementById('offlineStatus');
      if (status) status.textContent = 'Offline installation is unavailable in this browser.';
    });
  });
}
