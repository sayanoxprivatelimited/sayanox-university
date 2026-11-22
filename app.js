const courses = [
  { id:'python', title:'Python Basics', category:'programming', categoryLabel:'PROGRAMMING', icon:'Py', art:'python', description:'Take your first steps into programming with readable syntax.', lessons:[
    {title:'Meet Python', text:'Python is a readable, widely used programming language. Use print() to display text. To practice, install Python and run it in a terminal, or use a trusted online Python environment.', code:'print("Hello, world!")\nprint("I am learning Python")', practice:'Print a greeting using your own name.'},
    {title:'Variables and data', text:'Variables store information. A string contains text, while an integer is a whole number. Python infers the type from the value. Use an f-string to insert variables into text.', code:'name = "Mita"\nage = 18\nprint(f"Hello {name}, age {age}")', practice:'Store your favorite subject in a variable and print it.'},
    {title:'Conditions and loops', text:'Use if to run code conditionally and a for loop to repeat an action. Indentation—the whitespace at the start of a line—is important in Python.', code:'for number in range(1, 4):\n    if number > 1:\n        print(number)', practice:'Print the numbers from 1 to 5 and identify the even numbers.'}
  ]},
  { id:'rust', title:'Getting Started with Rust', category:'programming', categoryLabel:'PROGRAMMING', icon:'Rs', art:'rust', description:'Learn Rust, a language for safe and fast software.', lessons:[
    {title:'Meet Rust', text:'Rust is a systems programming language that emphasizes performance and memory safety. After installing Rust, create a project with cargo new hello and run it with cargo run.', code:'fn main() {\n    println!("Hello, Rust!");\n}', practice:'Change the program to display a message with your name.'},
    {title:'Variables and mutability', text:'In Rust, let creates a variable. Variables are immutable by default; use mut when a value needs to change. Rust can often infer the type.', code:'fn main() {\n    let mut score = 1;\n    score += 1;\n    println!("Score: {}", score);\n}', practice:'Create a mutable counter and increase its value.'},
    {title:'Understanding ownership', text:'Each value in Rust has an owner. When its owner leaves scope, the value is cleaned up. Borrowing lets you use a reference without taking ownership, helping keep memory safe.', code:'fn main() {\n    let name = String::from("Sayanox");\n    let borrowed = &name;\n    println!("{}", borrowed);\n    println!("{}", name);\n}', practice:'Create a String and print it through a reference.'}
  ]},
  { id:'c', title:'C Programming', category:'programming', categoryLabel:'PROGRAMMING', icon:'C', art:'c', description:'Explore how computers work by starting with C.', lessons:[
    {title:'Meet C', text:'C is a compiled language and a foundation of systems programming. You need a C compiler to run it. The program starts in main and uses printf to display text.', code:'#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C!\\n");\n    return 0;\n}', practice:'Save the program as hello.c and compile it with gcc hello.c -o hello.'},
    {title:'Data and operators', text:'Every variable in C has a type. int holds whole numbers and float holds decimal numbers. Arithmetic operators let you calculate with values.', code:'#include <stdio.h>\nint main(void) {\n    int a = 4, b = 3;\n    printf("Sum: %d\\n", a + b);\n    return 0;\n}', practice:'Print the sum and product of two numbers.'},
    {title:'Conditions and loops', text:'if checks a condition and a for loop repeats work. Statements generally end with a semicolon.', code:'#include <stdio.h>\nint main(void) {\n    for (int i = 1; i <= 5; i++) {\n        if (i % 2 == 0) printf("%d\\n", i);\n    }\n    return 0;\n}', practice:'Change the code to show odd numbers from 1 to 10.'}
  ]},
  { id:'web', title:'HTML & CSS Essentials', category:'web', categoryLabel:'WEB DEVELOPMENT', icon:'</>', art:'web', description:'Learn the foundations of the web and build your first page.', lessons:[
    {title:'Structure with HTML', text:'HTML gives a web page its structure. Elements such as headings, paragraphs and links organize content. Save the code below as index.html and open it in a browser.', code:'<!doctype html>\n<html lang="en">\n  <body>\n    <h1>Hello, web!</h1>\n    <p>My first page.</p>\n  </body>\n</html>', practice:'Change the page to include your name and a favorite topic.'},
    {title:'Style with CSS', text:'CSS controls colors, fonts and spacing. A selector chooses an element, and declarations set its styles.', code:'<style>\n  body { font-family: sans-serif; }\n  h1 { color: seagreen; }\n  p { padding: 16px; }\n</style>', practice:'Change your heading color and paragraph padding.'},
    {title:'Layout and responsive design', text:'Flexbox helps arrange elements in a row or column. A viewport meta tag and media queries make pages easier to use across devices.', code:'<meta name="viewport" content="width=device-width, initial-scale=1">\n<style>\n  .row { display: flex; gap: 1rem; }\n  @media (max-width: 600px) {\n    .row { flex-direction: column; }\n  }\n</style>', practice:'Create two cards that stack on a small screen.'}
  ]},
  { id:'javascript', title:'JavaScript Basics', category:'web', categoryLabel:'WEB DEVELOPMENT', icon:'JS', art:'js', description:'Start creating interactive experiences for the web.', lessons:[
    {title:'Meet JavaScript', text:'JavaScript adds interactivity to web pages. Run this code in your browser developer console. const creates a binding that cannot be reassigned.', code:'const greeting = "Hello, JavaScript!";\nconsole.log(greeting);', practice:'Show a message with your name in the console.'},
    {title:'Functions and conditions', text:'Functions package reusable behavior. Use if and else to produce different results based on conditions.', code:'function greet(name) {\n  if (name) return `Hello, ${name}!`;\n  return "Hello, learner!";\n}\nconsole.log(greet("Mita"));', practice:'Write a function that returns double a number.'},
    {title:'Page interactions', text:'The DOM lets JavaScript find and change HTML elements. Use addEventListener to respond to events such as clicks.', code:'<button id="hello">Click me</button>\n<script>\n  document.querySelector("#hello")\n    .addEventListener("click", () => {\n      alert("Keep learning!");\n    });\n<\/script>', practice:'Create a button that shows a message when clicked.'}
  ]},
  { id:'cs', title:'Computer Science Foundations', category:'fundamentals', categoryLabel:'FUNDAMENTALS', icon:'CS', art:'cs', description:'Explore problem solving and core computer science concepts.', lessons:[
    {title:'Problem solving and algorithms', text:'An algorithm is a clear sequence of steps for solving a problem. Before starting, write down the input, expected output and small examples. Then test each step.', code:'Problem: Find the larger number\n1. Read a and b\n2. If a > b, return a\n3. Otherwise, return b', practice:'Write the steps for finding the largest of three numbers.'},
    {title:'Data structures', text:'Data structures organize information. A list or array stores values in order; a map or dictionary looks up values by key. Choose a structure that fits the problem.', code:'numbers = [10, 20, 30]\nstudent = {"name": "Mita", "score": 90}\nprint(numbers[0])\nprint(student["name"])', practice:'Create a list of three favorite books.'},
    {title:'Complexity and testing', text:'Big O describes how work grows as input grows. Visiting every item in a list once is O(n). Test solutions with normal, empty and boundary cases.', code:'def total(numbers):\n    result = 0\n    for number in numbers:  # one pass: O(n)\n        result += number\n    return result\n\nprint(total([1, 2, 3]))', practice:'Test the function with an empty list and negative numbers.'}
  ]},
  { id:'go', title:'Go Fundamentals', category:'programming', categoryLabel:'PROGRAMMING', icon:'Go', art:'c', description:'Discover a simple, practical language for modern systems.', lessons:[
    {title:'Meet Go', text:'Go is a compiled language designed for clear, practical software. Install Go, save the example as main.go and run it with go run main.go.', code:'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, Go!")\n}', practice:'Change the greeting to include your name.'},
    {title:'Variables and functions', text:'Use := to declare and initialize a local variable. Functions receive values through parameters and may return a result.', code:'func double(n int) int {\n    return n * 2\n}\n\n// Inside main:\nvalue := double(4)\nfmt.Println(value)', practice:'Write a function that adds two integers.'},
    {title:'Loops and slices', text:'Go uses for for looping. A slice is a flexible view over a sequence of elements. The range form lets you iterate through values.', code:'numbers := []int{1, 2, 3}\nfor _, number := range numbers {\n    fmt.Println(number)\n}', practice:'Create a slice of three names and print each one.'}
  ]},
  { id:'sql', title:'SQL & Databases', category:'fundamentals', categoryLabel:'FUNDAMENTALS', icon:'SQL', art:'cs', description:'Learn to store and query structured information with SQL.', lessons:[
    {title:'Tables and rows', text:'Relational databases organize data into tables containing rows and columns. A primary key uniquely identifies each row. Try the following in a SQLite environment.', code:'CREATE TABLE courses (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\nINSERT INTO courses (id, title) VALUES (1, \'Python\');', practice:'Add a second course with a unique id.'},
    {title:'Reading data', text:'SELECT retrieves columns from a table. WHERE filters rows, and ORDER BY sorts results. SQL keywords are case-insensitive; uppercase is a common convention.', code:'SELECT id, title\nFROM courses\nWHERE id > 0\nORDER BY title;', practice:'Select only the title of the course with id 1.'},
    {title:'Updating safely', text:'UPDATE changes existing rows and DELETE removes them. Always check the WHERE clause: without one, these statements affect every row. Back up important data first.', code:'UPDATE courses SET title = \'Python Basics\' WHERE id = 1;\nSELECT * FROM courses WHERE id = 1;', practice:'Update the title of your second course and confirm the result.'}
  ]},
  { id:'git', title:'Git & Collaboration', category:'fundamentals', categoryLabel:'FUNDAMENTALS', icon:'Git', art:'rust', description:'Track changes and collaborate with confidence using Git.', lessons:[
    {title:'Your first repository', text:'Git records versions of files in a repository. Install Git, create a new folder, and run git init to begin. git status shows the current state of your working tree.', code:'mkdir my-project\ncd my-project\ngit init\ngit status', practice:'Create a file named notes.txt in your new repository.'},
    {title:'Making a commit', text:'A commit is a snapshot of staged changes. Review your changes, stage the files you want, then commit with a clear message. Configure your Git name and email if prompted.', code:'git status\ngit add notes.txt\ngit commit -m "Add learning notes"\ngit log --oneline', practice:'Update your notes and make another descriptive commit.'},
    {title:'Branches and collaboration', text:'A branch gives work its own line of development. Create a branch, make changes, and merge it after review. On shared projects, pull requests let others review before merging.', code:'git switch -c add-notes\n# edit and commit your changes\ngit switch main\ngit merge add-notes', practice:'Create a practice branch and commit a small change. Check your default branch name before switching back.'}
  ]},
  { id:'ai', title:'AI Foundations', category:'fundamentals', categoryLabel:'FUNDAMENTALS', icon:'AI', art:'python', description:'Understand the ideas behind machine learning and AI.', lessons:[
    {title:'What is machine learning?', text:'Machine learning builds models that learn patterns from data. Supervised learning uses labeled examples, while unsupervised learning looks for structure without labels. A prediction is not a guarantee.', code:'Example task: classify an email as spam or not spam\nInput: email text\nLabel: spam or not spam\nOutput: predicted label', practice:'Describe one real-world prediction problem and identify its input and output.'},
    {title:'Training and evaluation', text:'Split data into training and evaluation sets. The model learns from training examples; evaluation on unseen data estimates how well it may generalize. Avoid leaking evaluation data into training.', code:'data = ["example 1", "example 2", "example 3", "example 4"]\ntrain = data[:3]\ntest = data[3:]\nprint("train:", train, "test:", test)', practice:'Explain why evaluating on the same examples used for training can be misleading.'},
    {title:'Responsible AI', text:'AI systems can produce incorrect, biased or sensitive outputs. Check results against reliable sources, protect private information, and assess impacts on the people affected. Human judgment remains important.', code:'Before using an AI output:\n1. Verify important claims.\n2. Check for bias and missing context.\n3. Protect private data.\n4. Keep a human accountable.', practice:'Write a short checklist for safely using AI in a study project.'}
  ]}
];

const grid = document.getElementById('courseGrid');
const dialog = document.getElementById('courseDialog');
const dialogContent = document.getElementById('dialogContent');
let activeFilter = 'all';
let query = '';
let currentCourse = null;
let currentLesson = 0;
let progress = {};
try { progress = JSON.parse(localStorage.getItem('sayanox-progress-v1') || '{}') || {}; } catch { progress = {}; }

function saveProgress() { try { localStorage.setItem('sayanox-progress-v1', JSON.stringify(progress)); } catch {} }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function doneFor(course) { return Array.isArray(progress[course.id]) ? [...new Set(progress[course.id].filter(i => Number.isInteger(i) && i >= 0 && i < course.lessons.length))] : []; }
function renderCourses() {
  const filtered = courses.filter(c => (activeFilter === 'all' || c.category === activeFilter) && `${c.title} ${c.categoryLabel} ${c.description}`.toLowerCase().includes(query));
  document.getElementById('courseCount').textContent = String(courses.length).padStart(2,'0');
  document.getElementById('emptyState').hidden = filtered.length > 0;
  grid.innerHTML = filtered.map(c => `<article class="course-card"><button class="card-button" data-course="${c.id}" aria-label="Open ${escapeHtml(c.title)} course"><div class="card-art ${c.art}"><span class="card-art-label">SAYANOX / LEARN</span><span class="card-art-icon">${escapeHtml(c.icon)}</span><span class="card-orbit">✳ &nbsp; 100% FREE</span></div><div class="card-content"><div class="card-tags"><span class="tag">${c.categoryLabel}</span><span>BEGINNER</span></div><h3>${escapeHtml(c.title)}</h3><p>${escapeHtml(c.description)}</p><div class="card-meta"><span>▤ &nbsp; ${c.lessons.length} lessons</span><span>✳ &nbsp; Free certificate</span><span>${doneFor(c).length ? `${doneFor(c).length}/${c.lessons.length} complete` : 'Start course ↗'}</span></div></div></button></article>`).join('');
}
function openCourse(id) {
  currentCourse = courses.find(c => c.id === id);
  if (!currentCourse) return;
  const done = doneFor(currentCourse);
  currentLesson = currentCourse.lessons.findIndex((_, i) => !done.includes(i));
  if (currentLesson < 0) currentLesson = 0;
  renderDialog();
  if (!dialog.open) dialog.showModal();
}
function renderDialog() {
  const c = currentCourse, lesson = c.lessons[currentLesson], done = doneFor(c), completed = done.length === c.lessons.length;
  dialogContent.innerHTML = `<div class="dialog-header"><div><small>${c.categoryLabel} &nbsp; / &nbsp; BEGINNER</small><h2>${escapeHtml(c.title)}</h2></div><button class="close-dialog" aria-label="Close">×</button></div><div class="dialog-body"><div class="progress-row"><span>Your progress</span><strong>${done.length} / ${c.lessons.length} lessons complete</strong></div><div class="progress-track"><div class="progress-fill" style="width:${done.length / c.lessons.length * 100}%"></div></div><div class="lesson-tabs">${c.lessons.map((l,i) => `<button class="lesson-tab ${i===currentLesson?'active':''}" data-lesson="${i}">${done.includes(i)?'✓':'○'} &nbsp; Lesson ${i+1}</button>`).join('')}</div><article class="lesson-content"><h3>${escapeHtml(lesson.title)}</h3><p>${escapeHtml(lesson.text)}</p><pre><code>${escapeHtml(lesson.code)}</code></pre><p class="practice"><strong>Practice:</strong> ${escapeHtml(lesson.practice)}</p></article><div class="dialog-actions"><button class="secondary-button" data-action="previous" ${currentLesson === 0 ? 'disabled' : ''}>← Previous lesson</button><button class="button button-dark" data-action="complete">${done.includes(currentLesson) ? 'Completed ✓' : 'Mark lesson complete ✓'}</button><button class="secondary-button" data-action="next" ${currentLesson === c.lessons.length-1 ? 'disabled' : ''}>Next lesson →</button></div><div class="certificate-form"><h3>✳ &nbsp; Your certificate</h3>${completed ? `<p>Well done! You have completed every lesson. Enter your name as you would like it to appear on your certificate.</p><form id="certificateForm"><div class="form-row"><input name="studentName" type="text" maxlength="80" required placeholder="Your full name" aria-label="Your full name for the certificate"><button class="button button-dark" type="submit">Create certificate ↗</button></div></form><p class="form-note">Choose “Save as PDF” in the print dialog to save a copy. This is a self-reported completion keepsake, not an exam-based or independently verified credential.</p>` : `<p>Read, practice and complete every lesson to create a certificate in your name. Your progress is saved in this browser.</p>`}</div></div>`;
}
function printCertificate(name, course) {
  const date = new Intl.DateTimeFormat('en-GB', {day:'numeric',month:'long',year:'numeric'}).format(new Date());
  document.getElementById('printArea').innerHTML = `<div class="print-certificate"><div class="print-brand">✳ &nbsp; SAYANOX UNIVERSITY</div><h1>Certificate of Completion</h1><h2>Celebrating your learning journey</h2><p>This certificate is proudly presented to</p><div class="print-name">${escapeHtml(name)}</div><p>for completing the self-paced course</p><h2>${escapeHtml(course.title)}</h2><p>Completed on ${date}</p><p><small>Self-reported completion; not independently verified.</small></p><div class="print-signatures"><div>${escapeHtml(name)}<small>STUDENT</small></div><div>Sayan Mahata<small>OWNER, SAYANOX</small></div></div></div>`;
  window.print();
}
grid.addEventListener('click', e => { const button = e.target.closest('[data-course]'); if(button) openCourse(button.dataset.course); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === button)); renderCourses(); }));
document.getElementById('searchInput').addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); renderCourses(); });
dialogContent.addEventListener('click', e => {
  if (e.target.closest('.close-dialog')) { dialog.close(); return; }
  const tab = e.target.closest('[data-lesson]');
  if (tab) { currentLesson = Number(tab.dataset.lesson); renderDialog(); return; }
  const action = e.target.closest('[data-action]')?.dataset.action;
  if (action === 'previous' && currentLesson > 0) currentLesson--;
  if (action === 'next' && currentLesson < currentCourse.lessons.length-1) currentLesson++;
  if (action === 'complete') { const done = doneFor(currentCourse); if (!done.includes(currentLesson)) done.push(currentLesson); progress[currentCourse.id] = done; saveProgress(); renderCourses(); }
  if (action) renderDialog();
});
dialogContent.addEventListener('submit', e => { if (e.target.id !== 'certificateForm') return; e.preventDefault(); const input = e.target.elements.studentName; const name = input.value.trim(); if (!name) { input.setCustomValidity('Please enter your name.'); input.reportValidity(); input.addEventListener('input', () => input.setCustomValidity(''), {once:true}); return; } if (doneFor(currentCourse).length === currentCourse.lessons.length) printCertificate(name, currentCourse); });
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
const menu = document.getElementById('menuToggle');
menu.addEventListener('click', () => { const open = document.getElementById('navLinks').classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
document.getElementById('navLinks').addEventListener('click', e => { if (e.target.closest('a')) { document.getElementById('navLinks').classList.remove('open'); menu.setAttribute('aria-expanded','false'); } });
renderCourses();
