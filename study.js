// Measurements are local estimates and self-reported; they are not credentials.
const studyKey = 'sayanox-study-v1', weeklyGoalKey = 'sayanox-weekly-goal';
let studyData = {goal:1, days:{}}, weeklyGoal = 5, studySaveMessage = '';
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
function loadWeeklyGoal() {
  try { const value = localStorage.getItem(weeklyGoalKey); weeklyGoal = /^(?:[1-9]|[12][0-9]|3[0-5])$/.test(value || '') ? Number(value) : 5; }
  catch { weeklyGoal = 5; }
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
// Monday through Sunday in the learner's local calendar, including DST changes.
function studyWeek(reference = new Date()) {
  const start = new Date(reference.getFullYear(), reference.getMonth(), reference.getDate());
  start.setDate(start.getDate() - (start.getDay()+6)%7);
  const today = localDay(reference);
  return Array.from({length:7}, (_, i) => {
    const date = new Date(start); date.setDate(start.getDate()+i);
    const day = localDay(date), future = day > today;
    return {day, future, lessons:future ? 0 : (studyData.days[day]?.lessons || 0)};
  });
}
function studyRewards() {
  const completed = courses.reduce((sum, course) => sum + doneFor(course).length, 0);
  const finished = courses.filter(course => doneFor(course).length === course.lessons.length).length;
  const perfect = courses.some(course => quizScores[course.id] === quizzes[course.id].length);
  const xp = completed * 10;
  return {completed, finished, xp, level:1 + Math.floor(xp / 100), next:100 - xp % 100, achievements:[
    {name:'First step', description:'Mark one lesson complete', earned:completed >= 1},
    {name:'Building momentum', description:'Mark five lessons complete', earned:completed >= 5},
    {name:'Course explorer', description:'Mark every lesson in a course complete', earned:finished >= 1},
    {name:'Quiz practice', description:'Reach a perfect score on a course quiz', earned:perfect}
  ]};
}
function recordStudyLesson() { const today = todayStudy(); today.lessons = Math.min(10000, today.lessons + 1); today.met = today.lessons >= studyData.goal; if (!saveStudyData()) studySaveMessage = 'Study data could not be saved on this device.'; renderStudyDashboard(); }
function tickStudy(flush = false) {
  if (lastStudyTick === null || (document.hidden && !flush)) { lastStudyTick = null; return; }
  const now = Date.now(), elapsed = Math.max(0, Math.min(30, Math.floor((now - lastStudyTick) / 1000)));
  lastStudyTick = now;
  if (elapsed) { const today = todayStudy(); today.seconds = Math.min(86400, today.seconds + elapsed); if (!saveStudyData()) studySaveMessage = 'Study data could not be saved on this device.'; const panel = document.getElementById('studyDashboard'); if (!panel?.contains(document.activeElement)) renderStudyDashboard(); }
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
  const rewards = studyRewards(), completed = rewards.completed;
  const total = courses.reduce((sum, course) => sum + course.lessons.length, 0);
  const attempted = courses.filter(course => Number.isInteger(quizScores[course.id]) && quizScores[course.id] >= 0 && quizScores[course.id] <= quizzes[course.id].length);
  const quizTotal = attempted.reduce((sum, course) => sum + quizScores[course.id], 0), quizMaximum = attempted.reduce((sum, course) => sum + quizzes[course.id].length, 0);
  const seconds = Object.values(studyData.days).reduce((sum, entry) => sum + (Number.isFinite(entry.seconds) ? entry.seconds : 0), 0);
  const days = studyWeek(), weekTotal = days.reduce((sum, day) => sum + day.lessons, 0);
  // The inserted values are fixed labels, dates, or validated numbers, never user markup.
  panel.innerHTML = `<div class="study-title"><div><span>YOUR LEARNING JOURNEY</span><h3>Keep your momentum</h3></div><div class="study-goals"><label for="dailyGoal">Daily lesson goal</label><select id="dailyGoal">${Array.from({length:10},(_, i) => `<option value="${i+1}" ${studyData.goal === i+1 ? 'selected' : ''}>${i+1}</option>`).join('')}</select><label for="weeklyGoal">Weekly lesson goal</label><select id="weeklyGoal">${Array.from({length:35},(_, i) => `<option value="${i+1}" ${weeklyGoal === i+1 ? 'selected' : ''}>${i+1}</option>`).join('')}</select></div></div><div class="study-stats"><div><strong>${today.lessons} / ${studyData.goal}</strong><small>Lessons today</small></div><div><strong>${studyStreak()}</strong><small>Day goal streak</small></div><div><strong>${completed} / ${total}</strong><small>Lessons completed</small></div><div><strong>${quizTotal} / ${quizMaximum}</strong><small>Best quiz scores</small></div><div><strong>${Math.floor(seconds / 60)} min</strong><small>Visible course time</small></div></div><div class="study-momentum"><div><h4>Weekly activity</h4><p>${weekTotal} / ${weeklyGoal} lesson completion events this week${weekTotal >= weeklyGoal ? ' · Goal reached' : ''}</p><progress max="${weeklyGoal}" value="${Math.min(weekTotal, weeklyGoal)}" aria-label="Weekly lesson goal progress"></progress><ol class="study-week" aria-label="This week, Monday through Sunday">${days.map(day => `<li><time datetime="${day.day}">${day.day}</time><span>${day.future ? 'Upcoming' : `${day.lessons} lesson${day.lessons === 1 ? '' : 's'}`}</span></li>`).join('')}</ol></div><div><h4>Level ${rewards.level} · ${rewards.xp} XP</h4><p>${rewards.next} XP to the next level · 10 XP per currently completed lesson</p><progress max="100" value="${rewards.xp % 100}" aria-label="Progress to next level"></progress><h4>Achievements</h4><ul class="study-achievements">${rewards.achievements.map(a => `<li><strong>${a.name}</strong> — ${a.description} <span>${a.earned ? 'Earned' : 'Not yet earned'}</span></li>`).join('')}</ul></div></div><p>Lesson completion is self-reported; quiz scores are local and editable. Neither is a verified credential. XP and achievements reflect current progress and can decrease after a reset. Weekly activity counts completion events, including lessons completed again after a reset.</p><p>Time is estimated while a course is open and this tab is visible; it may include idle time. Your data stays in this browser.</p>`;
  const status = document.getElementById('studySaveStatus');
  if (status && status.textContent !== studySaveMessage) status.textContent = studySaveMessage;
}
const studyPanel = document.getElementById('studyDashboard');
if (studyPanel) studyPanel.addEventListener('change', event => {
  const value = Number(event.target.value);
  if (event.target.id === 'dailyGoal' && Number.isInteger(value) && value >= 1 && value <= 10) {
    studyData.goal = value; const current = todayStudy(); current.met = current.lessons >= studyData.goal;
    studySaveMessage = saveStudyData() ? 'Daily goal saved on this device.' : 'Daily goal could not be saved on this device.';
  } else if (event.target.id === 'weeklyGoal' && Number.isInteger(value) && value >= 1 && value <= 35) {
    weeklyGoal = value;
    try { localStorage.setItem(weeklyGoalKey, String(value)); studySaveMessage = 'Weekly goal saved on this device.'; }
    catch { studySaveMessage = 'Weekly goal could not be saved on this device.'; }
  } else return;
  const focusId = event.target.id; renderStudyDashboard();
  document.getElementById(focusId)?.focus();
});
loadStudyData(); loadWeeklyGoal(); renderStudyDashboard();
document.addEventListener('visibilitychange', () => { if (document.hidden) stopStudyTimer(); else if (document.getElementById('courseDialog').open) startStudyTimer(); });
window.addEventListener('pagehide', stopStudyTimer);
