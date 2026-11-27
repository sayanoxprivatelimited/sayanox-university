(() => {
  const keys = {lessons:'sayanox-advanced-progress-v1', projects:'sayanox-advanced-projects-v1', scores:'sayanox-advanced-scores-v1'};
  const boxes = [...document.querySelectorAll('[data-complete]')];
  const projects = [...document.querySelectorAll('[data-project]')];
  const quizzes = [...document.querySelectorAll('[data-quiz]')];
  const cards = [...document.querySelectorAll('[data-course]')];
  const status = document.getElementById('advanced-save-status');
  const progress = document.getElementById('advanced-progress');
  document.querySelectorAll('[data-open-runner]').forEach(button => { button.hidden = false; });
  function read(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || '{}');
      return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    } catch { status.textContent = 'Browser storage is unavailable or invalid; progress may not be saved.'; return {}; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); status.textContent = 'Progress saved in this browser. Clearing site data can remove it.'; }
    catch { status.textContent = 'Could not save progress. Your changes may be lost when you leave.'; }
  }
  function selections(items, attribute) {
    const result = Object.create(null);
    for (const item of items) if (item.checked) (result[item.dataset[attribute]] ||= []).push(Number(item.dataset.index));
    return result;
  }
  const saved = read(keys.lessons), savedProjects = read(keys.projects), savedScores = read(keys.scores);
  for (const box of boxes) { box.closest('label').hidden = false; box.checked = Array.isArray(saved[box.dataset.complete]) && saved[box.dataset.complete].includes(Number(box.dataset.index)); }
  for (const box of projects) { box.hidden = false; box.checked = Array.isArray(savedProjects[box.dataset.project]) && savedProjects[box.dataset.project].includes(Number(box.dataset.index)); }
  for (const form of quizzes) {
    form.hidden = false;
    const count = form.querySelectorAll('fieldset').length, score = savedScores[form.dataset.quiz];
    if (Number.isInteger(score) && score >= 0 && score <= count) form.querySelector('[data-quiz-result]').textContent = `Last score: ${score} / ${count}. This is practice, not a verified assessment.`;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form), fields = [...form.querySelectorAll('fieldset')];
      if (fields.some((_, i) => data.get(`q${i}`) === null)) { form.querySelector('[data-quiz-result]').textContent = 'Choose an answer for every question.'; return; }
      let score = 0;
      fields.forEach((field, i) => { if (Number(data.get(`q${i}`)) === Number(field.dataset.answer)) score++; field.querySelector('.quiz-explanation').hidden = false; });
      const scores = read(keys.scores); scores[form.dataset.quiz] = score; save(keys.scores, scores);
      form.querySelector('[data-quiz-result]').textContent = `Score: ${score} / ${fields.length}. Review the explanations and try again. This is practice, not a verified assessment.`;
    });
  }
  function update() {
    for (const card of cards) {
      const group = [...card.querySelectorAll('[data-complete]')];
      card.querySelector('[data-course-progress]').textContent = `${group.filter(box => box.checked).length} / ${group.length} completed`;
    }
    progress.textContent = `${boxes.filter(box => box.checked).length} / ${boxes.length} lessons completed · self-reported`;
  }
  for (const box of boxes) box.addEventListener('change', () => { save(keys.lessons, selections(boxes, 'complete')); update(); });
  for (const box of projects) box.addEventListener('change', () => save(keys.projects, selections(projects, 'project')));
  document.getElementById('advanced-search').addEventListener('input', event => {
    const terms = event.target.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let found = 0;
    for (const card of cards) { card.hidden = !terms.every(term => card.textContent.toLocaleLowerCase().includes(term)); if (!card.hidden) found++; }
    document.getElementById('advanced-empty').hidden = found !== 0;
  });
  let worker = null, timer = null;
  function stop() { if (worker) worker.terminate(); worker = null; clearTimeout(timer); timer = null; }
  document.addEventListener('click', event => {
    const open = event.target.closest('[data-open-runner]');
    if (open) {
      const lesson = open.closest('.advanced-lesson'), panel = lesson.querySelector('.advanced-runner'), editor = panel.querySelector('textarea');
      if (panel.hidden) { if (!editor.dataset.initialized) { editor.value = lesson.querySelector('code').textContent; editor.dataset.initialized = 'yes'; } panel.hidden = false; editor.focus(); }
      return;
    }
    const run = event.target.closest('[data-run-python]'), cancel = event.target.closest('[data-stop-python]');
    if (!run && !cancel) return;
    const panel = (run || cancel).closest('.advanced-runner'), output = panel.querySelector('pre');
    if (cancel) { stop(); output.textContent = 'Execution stopped.'; return; }
    stop(); output.textContent = 'Starting Python runtime…';
    try {
      const current = new Worker('../runner-worker.js'); worker = current;
      timer = setTimeout(() => { if (worker === current) { stop(); output.textContent = 'Execution timed out. Check for a long-running loop or slow runtime download.'; } }, 45000);
      current.onmessage = ({data}) => { if (worker !== current) return; if (data.status) output.textContent = data.status; if (typeof data.output === 'string') { output.textContent = data.output; stop(); } };
      current.onerror = () => { if (worker === current) { stop(); output.textContent = 'Could not start the Python runtime. Try again when the runtime is available.'; } };
      current.postMessage({mode:'python', code:panel.querySelector('textarea').value});
    } catch { stop(); output.textContent = 'Your browser could not start the practice runtime.'; }
  });
  window.addEventListener('pagehide', stop);
  update();
})();
