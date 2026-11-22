// All measurements stay on this device. Active time counts while a course is open
// and the page is visible, not verified attention or actual engagement.
const studyKey = 'sayanox-study-v1';
let studyData = {goal:1, days:{}};
let studyTimer = null, lastStudyTick = null;
function localDay(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
function loadStudyData() {
  try {
    const saved = JSON.parse(localStorage.getItem(studyKey) || 'null');
    studyData = {goal: saved && Number.isInteger(saved.goal) && saved.goal >= 1 && saved.goal <= 10 ? saved.goal : 1, days:{}};
    if (saved && saved.days && typeof saved.days === 'object' && !Array.isArray(saved.days)) {
      for (const [key, entry] of Object.entries(saved.days)) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(key) && entry && Number.isInteger(entry.lessons) && entry.lessons >= 0 && entry.lessons <= 10000 && Number.isInteger(entry.seconds) && entry.seconds >= 0 && entry.seconds <= 86400 && typeof entry.met === 'boolean') studyData.days[key] = {lessons:entry.lessons,seconds:entry.seconds,met:entry.met};
      }
    }
  } catch { studyData = {goal:1,days:{}}; }
}
function saveStudyData() { try { localStorage.setItem(studyKey, JSON.stringify(studyData)); return true; } catch { return false; } }
function todayStudy() { const key = localDay(); if (!studyData.days[key] || typeof studyData.days[key] !== 'object') studyData.days[key] = {lessons:0,seconds:0,met:false}; return studyData.days[key]; }
function studyStreak() {
  const date = new Date();
  const today = studyData.days[localDay(date)];
  if (!today || !today.met) date.setDate(date.getDate()-1);
  let streak = 0;
  while (streak < 5000 && studyData.days[localDay(date)]?.met) { streak++; date.setDate(date.getDate()-1); }
  return streak;
}
function recordStudyLesson() { const today = todayStudy(); today.lessons++; today.met = today.lessons >= studyData.goal; saveStudyData(); renderStudyDashboard(); }
function tickStudy(flush = false) {
  if (lastStudyTick === null || (document.hidden && !flush)) { lastStudyTick = null; return; }
  const now = Date.now(), elapsed = Math.max(0, Math.min(30, Math.floor((now - lastStudyTick) / 1000)));
  lastStudyTick = now;
  if (elapsed) { const today = todayStudy(); today.seconds = Math.min(86400, today.seconds + elapsed); saveStudyData(); renderStudyDashboard(); }
}
function startStudyTimer() {
  if (studyTimer || document.hidden) return;
  lastStudyTick = Date.now(); studyTimer = setInterval(tickStudy, 15000);
}
function stopStudyTimer() { tickStudy(true); if (studyTimer) clearInterval(studyTimer); studyTimer = null; lastStudyTick = null; }
function renderStudyDashboard() {
  const panel = document.getElementById('studyDashboard');
  if (!panel) return;
  const today = studyData.days[localDay()] || {lessons:0,seconds:0,met:false};
  const completed = courses.reduce((sum, course) => sum + doneFor(course).length, 0);
  const total = courses.reduce((sum, course) => sum + course.lessons.length, 0);
  const attempted = courses.filter(course => Number.isInteger(quizScores[course.id]) && quizScores[course.id] >= 0 && quizScores[course.id] <= quizzes[course.id].length);
  const quizTotal = attempted.reduce((sum, course) => sum + quizScores[course.id], 0), quizMaximum = attempted.reduce((sum, course) => sum + quizzes[course.id].length, 0);
  const seconds = Object.values(studyData.days).reduce((sum, entry) => sum + (Number.isFinite(entry.seconds) ? entry.seconds : 0), 0);
  // Numeric values are locally computed. No user-provided markup is rendered.
  panel.innerHTML = `<div class="study-title"><div><span>YOUR DAILY PRACTICE</span><h3>Keep your momentum</h3></div><label>Daily lesson goal <select id="dailyGoal" aria-label="Daily lesson goal">${Array.from({length:10},(_, i) => `<option value="${i+1}" ${studyData.goal === i+1 ? 'selected' : ''}>${i+1}</option>`).join('')}</select></label></div><div class="study-stats"><div><strong>${today.lessons} / ${studyData.goal}</strong><small>Lessons today</small></div><div><strong>${studyStreak()}</strong><small>Day goal streak</small></div><div><strong>${completed} / ${total}</strong><small>Lessons completed</small></div><div><strong>${quizTotal} / ${quizMaximum}</strong><small>Best quiz scores</small></div><div><strong>${Math.floor(seconds / 60)} min</strong><small>Visible course time</small></div></div><p>Time is estimated while a course is open and this tab is visible; it may include idle time. Your data stays in this browser.</p>`;
  panel.querySelector('#dailyGoal').addEventListener('change', event => { studyData.goal = Number(event.target.value); const current = todayStudy(); current.met = current.lessons >= studyData.goal; saveStudyData(); renderStudyDashboard(); });
}
loadStudyData(); renderStudyDashboard();
document.addEventListener('visibilitychange', () => { if (document.hidden) stopStudyTimer(); else if (document.getElementById('courseDialog').open) startStudyTimer(); });
window.addEventListener('pagehide', stopStudyTimer);
