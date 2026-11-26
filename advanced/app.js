(() => {
  const key = 'sayanox-advanced-progress-v1';
  const boxes = [...document.querySelectorAll('[data-complete]')];
  const cards = [...document.querySelectorAll('[data-course]')];
  const status = document.getElementById('advanced-save-status');
  for (const box of boxes) box.closest('label').hidden = false;
  const progress = document.getElementById('advanced-progress');
  let saved = {};
  try {
    const value = JSON.parse(localStorage.getItem(key) || '{}');
    if (value && typeof value === 'object' && !Array.isArray(value)) saved = value;
  } catch { status.textContent = 'Browser storage is unavailable or invalid; progress may not be saved.'; }
  for (const box of boxes) box.checked = Array.isArray(saved[box.dataset.complete]) && saved[box.dataset.complete].includes(Number(box.dataset.index));
  function update() {
    for (const card of cards) {
      const group = [...card.querySelectorAll('[data-complete]')];
      card.querySelector('[data-course-progress]').textContent = `${group.filter(box => box.checked).length} / ${group.length} completed`;
    }
    progress.textContent = `${boxes.filter(box => box.checked).length} / ${boxes.length} lessons completed · self-reported`;
  }
  for (const box of boxes) box.addEventListener('change', () => {
    const data = {};
    for (const item of boxes) if (item.checked) (data[item.dataset.complete] ||= []).push(Number(item.dataset.index));
    try { localStorage.setItem(key, JSON.stringify(data)); status.textContent = 'Progress saved in this browser. Clearing site data can remove it.'; }
    catch { status.textContent = 'Could not save progress. Your changes may be lost when you leave.'; }
    update();
  });
  document.getElementById('advanced-search').addEventListener('input', event => {
    const terms = event.target.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let found = 0;
    for (const card of cards) {
      const text = card.textContent.toLocaleLowerCase();
      card.hidden = !terms.every(term => text.includes(term));
      if (!card.hidden) found++;
    }
    document.getElementById('advanced-empty').hidden = found !== 0;
  });
  update();
})();
