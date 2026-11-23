document.getElementById('verifyForm').addEventListener('submit', event => {
  event.preventDefault();
  const id = document.getElementById('certificateId').value.trim();
  document.getElementById('verifyResult').textContent = /^SU-[0-9A-F]{32}$/i.test(id)
    ? 'ID format looks correct. This does not establish that a certificate was issued.'
    : 'ID format does not match. Expected SU- followed by 32 hexadecimal characters.';
});
