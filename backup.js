/* Versioned, explicit browser-local backup. Never exports unrelated origin data. */
const backupFormat = 'sayanox-learning-backup';
const backupVersion = 1;
const backupMaxBytes = 8 * 1024 * 1024;

function backupKeys() {
  const keys = ['sayanox-progress-v1', 'sayanox-quiz-scores', 'sayanox-bookmarks', 'sayanox-last-course'];
  for (const course of courses) {
    keys.push(`sayanox-project-${course.id}`);
    for (let index = 0; index < course.lessons.length; index++) {
      keys.push(lessonKey('notes', course, index), lessonKey('draft', course, index));
    }
  }
  return keys;
}
function parseBackupValue(raw, description) {
  try { return JSON.parse(raw); } catch { throw new Error(`Invalid ${description}.`); }
}
function validObject(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function validateBackup(backup) {
  if (!validObject(backup) || backup.format !== backupFormat || backup.version !== backupVersion || !validObject(backup.data)) throw new Error('This is not a supported Sayanox backup.');
  const allowed = new Set(backupKeys());
  const validCourses = new Map(courses.map(course => [course.id, course]));
  const validBookmarks = new Set(courses.flatMap(course => course.lessons.map((_, index) => lessonKey('bookmark', course, index))));
  for (const [key, value] of Object.entries(backup.data)) {
    if (!allowed.has(key) || typeof value !== 'string') throw new Error('Backup contains an unsupported entry.');
    if (key === 'sayanox-last-course' && !validCourses.has(value)) throw new Error('Backup contains an unknown course.');
    if ((key.startsWith('sayanox-notes-') || key.startsWith('sayanox-draft-')) && value.length > 20000) throw new Error('A note or draft is too long.');
    if (key === 'sayanox-progress-v1') {
      const data = parseBackupValue(value, 'lesson progress');
      if (!validObject(data) || Object.entries(data).some(([id, entries]) => !validCourses.has(id) || !Array.isArray(entries) || entries.some(i => !Number.isInteger(i) || i < 0 || i >= validCourses.get(id).lessons.length))) throw new Error('Invalid lesson progress.');
    }
    if (key === 'sayanox-quiz-scores') {
      const data = parseBackupValue(value, 'quiz scores');
      if (!validObject(data) || Object.entries(data).some(([id, score]) => !validCourses.has(id) || !Number.isInteger(score) || score < 0 || score > quizzes[id].length)) throw new Error('Invalid quiz scores.');
    }
    if (key === 'sayanox-bookmarks') {
      const data = parseBackupValue(value, 'bookmarks');
      if (!validObject(data) || Object.entries(data).some(([id, marked]) => !validBookmarks.has(id) || typeof marked !== 'boolean')) throw new Error('Invalid bookmarks.');
    }
    if (key.startsWith('sayanox-project-')) {
      const id = key.slice('sayanox-project-'.length), data = parseBackupValue(value, 'project checklist');
      if (!validCourses.has(id) || !Array.isArray(data) || data.some(i => !Number.isInteger(i) || i < 0 || i >= courseProjects[id].tasks.length)) throw new Error('Invalid project checklist.');
    }
  }
  return backup.data;
}
function collectBackup() {
  const data = {};
  for (const key of backupKeys()) {
    const value = localStorage.getItem(key);
    if (value !== null) data[key] = value;
  }
  const backup = {format: backupFormat, version: backupVersion, createdAt: new Date().toISOString(), data};
  validateBackup(backup);
  return backup;
}
function restoreBackup(data) {
  const keys = backupKeys();
  // Snapshot all app-owned keys so a failed write can be rolled back.
  const before = new Map(keys.map(key => [key, localStorage.getItem(key)]));
  try {
    for (const key of keys) localStorage.removeItem(key);
    for (const [key, value] of Object.entries(data)) localStorage.setItem(key, value);
  } catch (error) {
    let restored = true;
    try { for (const key of keys) { const value = before.get(key); if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, value); } } catch { restored = false; }
    throw new Error(restored ? 'Import failed; your previous data was restored.' : 'Import failed and previous data could not be fully restored. Use your backup file to recover it.');
  }
  progress = JSON.parse(localStorage.getItem('sayanox-progress-v1') || '{}');
  quizScores = JSON.parse(localStorage.getItem('sayanox-quiz-scores') || '{}');
  bookmarks = JSON.parse(localStorage.getItem('sayanox-bookmarks') || '{}');
  lastCourse = localStorage.getItem('sayanox-last-course');
  storageAvailable = true;
  projectMemory = {};
  renderCourses();
}
const backupStatus = document.getElementById('backupStatus');
document.getElementById('exportData').addEventListener('click', () => {
  try {
    const backup = collectBackup();
    const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], {type:'application/json'}));
    const link = document.createElement('a');
    link.href = url; link.download = 'sayanox-learning-backup.json';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    backupStatus.textContent = 'Backup downloaded. Store it securely: it contains your notes and code in plain text.';
  } catch (error) { backupStatus.textContent = `Could not export backup: ${error.message}`; }
});
document.getElementById('importData').addEventListener('click', () => document.getElementById('backupFile').click());
document.getElementById('backupFile').addEventListener('change', async event => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  try {
    if (file.size > backupMaxBytes) throw new Error('Backup exceeds the 8 MB limit.');
    const backup = JSON.parse(await file.text());
    const data = validateBackup(backup);
    if (!window.confirm('Replace all current Sayanox learning data in this browser with this backup? Notes, drafts, bookmarks, scores and progress not in the file will be removed.')) { backupStatus.textContent = 'Import cancelled. No data was changed.'; return; }
    restoreBackup(data);
    backupStatus.textContent = 'Backup restored in this browser.';
  } catch (error) { backupStatus.textContent = `Could not import backup: ${error.message}`; }
  finally { event.target.value = ''; }
});
