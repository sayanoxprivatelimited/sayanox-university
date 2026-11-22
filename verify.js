document.getElementById('verifyForm').addEventListener('submit', event => {
  event.preventDefault();
  const result = document.getElementById('verifyResult');
  result.textContent = '';
  const id = document.getElementById('certificateId').value.trim().toUpperCase();
  try {
    const records = JSON.parse(localStorage.getItem('sayanox-certificates-v1') || '[]');
    const record = Array.isArray(records) && records.find(item => item && item.id === id);
    if (!record) { result.textContent = 'No local record found. This does not establish whether a certificate was issued elsewhere.'; return; }
    for (const line of ['Local self-reported record found — not independently verified.', `Name: ${record.name}`, `Course: ${record.course}`, `Date: ${record.date}`, `ID: ${record.id}`]) {
      const p = document.createElement('p'); p.textContent = line; result.appendChild(p);
    }
  } catch { result.textContent = 'Certificate records could not be read in this browser.'; }
});
