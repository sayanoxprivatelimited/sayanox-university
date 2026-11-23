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

// Additional practice extends the original beginner pathways without claiming full mastery.
courses.find(c => c.id === 'python').lessons.push(
  {title:'Functions and return values', text:'Functions group reusable behavior. Parameters receive input, and return sends a result back to the caller. Give functions names that describe what they do and test them with different inputs.', code:'def square(number):\n    return number * number\n\nprint(square(5))', practice:'Write a function that converts minutes to seconds. Test it with zero and a positive value.'},
  {title:'Handling errors', text:'Programs can fail when input is invalid. Use try and except to handle expected exceptions without hiding unrelated problems. ValueError occurs when text cannot be converted to an integer.', code:'try:\n    number = int("42")\n    print(number * 2)\nexcept ValueError:\n    print("Please enter a whole number")', practice:'Change the input to non-numeric text and observe the result.'}
);
courses.find(c => c.id === 'rust').lessons.push(
  {title:'Functions and control flow', text:'Functions use fn and may return a typed value. An if expression can select a value; both branches must have compatible types.', code:'fn double(value: i32) -> i32 {\n    value * 2\n}\n\nfn main() {\n    println!("{}", double(4));\n}', practice:'Write a function that returns the larger of two integers.'},
  {title:'Recoverable errors', text:'Rust represents recoverable errors with Result<T, E>. Match forces you to consider success and failure explicitly, rather than silently ignoring an error.', code:'fn main() {\n    let parsed = "42".parse::<i32>();\n    match parsed {\n        Ok(n) => println!("{}", n),\n        Err(e) => println!("Invalid number: {}", e),\n    }\n}', practice:'Try parsing a word instead of a number and inspect the error.'}
);
courses.find(c => c.id === 'c').lessons.push(
  {title:'Functions', text:'A function groups instructions behind a name. Its parameter types and return type describe the data it accepts and produces. Functions help reduce duplication.', code:'#include <stdio.h>\nint double_value(int n) {\n    return n * 2;\n}\nint main(void) {\n    printf("%d\\n", double_value(4));\n    return 0;\n}', practice:'Write a function that returns the larger of two integers.'},
  {title:'Introducing pointers', text:'A pointer stores an address. The & operator gets a variable’s address and * accesses the pointed-to value. Only dereference pointers that refer to valid objects.', code:'#include <stdio.h>\nint main(void) {\n    int value = 10;\n    int *ptr = &value;\n    printf("%d\\n", *ptr);\n    return 0;\n}', practice:'Change the value through the pointer and print the original variable.'}
);

const grid = document.getElementById('courseGrid');
const dialog = document.getElementById('courseDialog');
const dialogContent = document.getElementById('dialogContent');
let activeFilter = 'all';
let query = '';
let currentCourse = null;
let currentLesson = 0;
let currentView = 'intro';
let challengeIndex = 0;
const challengeAttempts = new Set();
let editorDraft = '';
let disposeReadingProgress = () => {};
let activeWorker = null;
let runTimer = null;
let quizResult = null;
let quizRetryAnswers = null;
let lastCourse = null;
let progress = {};
let quizScores = {};
let bookmarks = {};
let projectMemory = {};
let storageAvailable = true;
try { lastCourse = localStorage.getItem('sayanox-last-course'); quizScores = JSON.parse(localStorage.getItem('sayanox-quiz-scores') || '{}') || {}; bookmarks = JSON.parse(localStorage.getItem('sayanox-bookmarks') || '{}') || {}; } catch { storageAvailable = false; }
try { progress = JSON.parse(localStorage.getItem('sayanox-progress-v1') || '{}') || {}; } catch { progress = {}; }

function saveProgress() { try { localStorage.setItem('sayanox-progress-v1', JSON.stringify(progress)); return true; } catch { storageAvailable = false; return false; } }
function readStored(key) { try { return localStorage.getItem(key); } catch { storageAvailable = false; return null; } }
function writeStored(key, value) { try { localStorage.setItem(key, value); return true; } catch { storageAvailable = false; return false; } }
function lessonKey(type, course = currentCourse, index = currentLesson) { return `sayanox-${type}-${course.id}-${index}`; }
function projectDone(course) { if (Array.isArray(projectMemory[course.id])) return [...projectMemory[course.id]]; try { const value = JSON.parse(readStored(`sayanox-project-${course.id}`) || '[]'); return Array.isArray(value) ? [...new Set(value.filter(i => Number.isInteger(i) && i >= 0 && i < courseProjects[course.id].tasks.length))] : []; } catch { return []; } }
function challengeKey(course = currentCourse, index = challengeIndex) { return `sayanox-challenge-${course.id}-${index}`; }
function challengeDraft() { return readStored(challengeKey()) ?? codeChallenges[currentCourse.id][challengeIndex].starter; }
function lessonDraft(course, index) { const saved = readStored(lessonKey('draft', course, index)); return saved === null ? defaultCode(course, index) : saved; }
function quizFor(course) { return quizzes[course.id].map((item, i) => { const shift = i % item.options.length; return {...item, options: [...item.options.slice(shift), ...item.options.slice(0, shift)], answer: (item.answer - shift + item.options.length) % item.options.length}; }); }
function renderDashboard() {
  resetTextSlots();
  const dashboard = document.getElementById('learningDashboard');
  const last = courses.find(c => c.id === lastCourse);
  const completedCount = courses.reduce((sum, c) => sum + doneFor(c).length, 0);
  dashboard.hidden = !last && !completedCount;
  dashboard.innerHTML = `<div><span class="dashboard-icon">✳</span><div><strong>Your learning journey</strong><small>${completedCount} lesson${completedCount === 1 ? '' : 's'} completed across ${courses.length} courses · ${storageAvailable ? 'saved in this browser' : 'available for this session only'}</small></div></div>${last ? `<button data-resume="${slotText(last.id)}">Continue ${slotText(last.title)} ↗</button>` : ''}`;
  hydrateTextSlots(dashboard);
}
// Search only published lesson content; personal notes and drafts stay private.
function searchLessons(input) {
  const terms = input.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return courses.flatMap(course => course.lessons.map((lesson, index) => ({course, lesson, index})))
    .filter(({course, lesson}) => {
      const text = [course.title, lesson.title, lesson.text, lesson.code, lesson.practice].join(' ').toLocaleLowerCase();
      return terms.every(term => text.includes(term));
    });
}
function renderLessonSearch(value) {
  const panel = document.getElementById('lessonSearchResults');
  const status = document.getElementById('lessonSearchStatus');
  const matches = searchLessons(value);
  if (!value.trim()) { panel.innerHTML = ''; status.textContent = 'Enter a search term to find lessons.'; return; }
  status.textContent = matches.length ? `${matches.length} lesson${matches.length === 1 ? '' : 's'} found${matches.length > 12 ? '; showing first 12' : ''}.` : 'No lessons found. Try a different search.';
  resetTextSlots();
  panel.innerHTML = matches.slice(0, 12).map(({course, lesson, index}) => `<button type="button" class="lesson-search-result" data-search-course="${slotText(course.id)}" data-search-lesson="${index}"><strong>${slotText(lesson.title)}</strong><span>${slotText(course.title)} · Lesson ${index + 1}</span></button>`).join('');
  hydrateTextSlots(panel);
}
function lessonMinutes(lesson) {
  const words = `${lesson.title} ${lesson.text} ${lesson.code} ${lesson.practice}`.trim().split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 180) + 2); // Reading plus a short practice estimate.
}
function lessonMarkdown(course, lesson, notes) {
  const fence = '~'.repeat(Math.max(3, ...(lesson.code.match(/~+/g) || []).map(s => s.length + 1)));
  return `# ${course.title} — ${lesson.title}\n\n${lesson.text}\n\n## Example\n\n${fence}\n${lesson.code}\n${fence}\n\n## Practice\n\n${lesson.practice}\n\n## My notes\n\n${notes || '(No personal notes.)'}\n`;
}
function exportLessonNotes() {
  const status = document.getElementById('notesStatus');
  try {
    const lesson = currentCourse.lessons[currentLesson];
    const notes = document.getElementById('lessonNotes').value;
    const url = URL.createObjectURL(new Blob([lessonMarkdown(currentCourse, lesson, notes)], {type:'text/markdown;charset=utf-8'}));
    const link = document.createElement('a'); link.href = url; link.download = `sayanox-${currentCourse.id}-lesson-${currentLesson + 1}.md`;
    document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = 'Markdown downloaded. It contains your personal notes in plain text.';
  } catch { status.textContent = 'Could not download notes in this browser.'; }
}
function copyLearningCode(value, statusId) {
  const status = document.getElementById(statusId);
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(value).then(() => { status.textContent = 'Code copied.'; }).catch(() => { status.textContent = 'Could not copy. Select the code and copy it manually.'; });
  else status.textContent = 'Clipboard unavailable. Select the code and copy it manually.';
}
// Highlight only known programming examples, using text nodes rather than HTML.
function highlightExample(node, code, courseId) {
  if (!node) return;
  const languages = {
    python: ['def','return','for','in','if','else','try','except','pass','import','from','as','True','False','None'],
    javascript: ['const','let','function','return','if','else','for','of','new','true','false','null'],
    rust: ['fn','let','mut','return','if','else','match','use','pub','impl'],
    c: ['int','void','return','if','else','for','while','char','float','const'],
    go: ['package','import','func','return','for','range','if','else','var'],
    sql: ['SELECT','FROM','WHERE','ORDER','BY','CREATE','TABLE','INSERT','INTO','VALUES','UPDATE','SET','PRIMARY','KEY','NOT','NULL','INTEGER','TEXT']
  };
  if (!languages[courseId] || /^\s*</.test(code)) return;
  const keywords = new Set(languages[courseId].map(word => word.toLowerCase()));
  const comment = courseId === 'python' ? '#[^\\n]*' : courseId === 'sql' ? '--[^\\n]*' : '\\/\\/[^\\n]*';
  const token = new RegExp(`${comment}|"(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*'|\\b[A-Za-z_][A-Za-z_0-9]*\\b|\\b\\d+(?:\\.\\d+)?\\b`, 'g');
  node.textContent = '';
  let previous = 0;
  for (const match of code.matchAll(token)) {
    node.appendChild(document.createTextNode(code.slice(previous, match.index)));
    const value = match[0];
    const kind = value.startsWith('#') || value.startsWith('//') || value.startsWith('--') ? 'comment' : value.startsWith('"') || value.startsWith("'") ? 'string' : /^\d/.test(value) ? 'number' : keywords.has(value.toLowerCase()) ? 'keyword' : '';
    if (kind) { const span = document.createElement('span'); span.className = `syntax-${kind}`; span.textContent = value; node.appendChild(span); }
    else node.appendChild(document.createTextNode(value));
    previous = match.index + value.length;
  }
  node.appendChild(document.createTextNode(code.slice(previous)));
}
// Measures how much of the lesson has reached the visible viewport, not completion.
function setupReadingProgress() {
  const lesson = dialogContent.querySelector('[data-reading-content]');
  const bar = dialogContent.querySelector('#readingProgress');
  if (!lesson || !bar) return;
  const containers = [dialogContent.querySelector('.classroom-content'), dialogContent.querySelector('.classroom-layout'), dialog].filter(Boolean);
  const update = () => {
    const rect = lesson.getBoundingClientRect();
    let bottom = window.innerHeight;
    for (const container of containers) {
      const overflow = window.getComputedStyle(container).overflowY;
      if (overflow === 'auto' || overflow === 'scroll') bottom = Math.min(bottom, container.getBoundingClientRect().bottom);
    }
    const value = rect.height > 0 ? Math.round(Math.max(0, Math.min(1, (bottom - rect.top) / rect.height)) * 100) : 0;
    bar.value = value; bar.setAttribute('aria-valuenow', String(value));
  };
  for (const container of containers) container.addEventListener('scroll', update, {passive:true});
  window.addEventListener('resize', update, {passive:true});
  disposeReadingProgress = () => { for (const container of containers) container.removeEventListener('scroll', update); window.removeEventListener('resize', update); disposeReadingProgress = () => {}; };
  update();
}
function renderSavedLessons() {
  resetTextSlots();
  const panel = document.getElementById('savedLessons');
  const saved = courses.flatMap(course => course.lessons.map((lesson, index) => ({course, lesson, index})).filter(({index}) => bookmarks[lessonKey('bookmark', course, index)]));
  panel.hidden = saved.length === 0;
  panel.innerHTML = `<div class="saved-heading"><div><span>REVISIT &amp; REVIEW</span><strong>Saved lessons</strong></div><small>${saved.length} saved</small></div><div class="saved-list">${saved.map(({course, lesson, index}) => `<button data-revisit-course="${slotText(course.id)}" data-revisit-lesson="${index}"><span>${slotText(course.title)}</span><strong>${slotText(lesson.title)}</strong><i>↗</i></button>`).join('')}</div>`;
  hydrateTextSlots(panel);
}
// Dynamic strings are assigned after parsing static markup, never interpolated as HTML.
let textSlots = [];
function slotText(value) { const id = textSlots.push(String(value)) - 1; return `SAYANOX_TEXT_SLOT_${id}_END`; }
function resetTextSlots() { textSlots = []; }
function hydrateTextSlots(root) {
  const pattern = /SAYANOX_TEXT_SLOT_(\d+)_END/g;
  const replace = value => value.replace(pattern, (_, index) => textSlots[Number(index)] ?? '');
  const walker = document.createTreeWalker(root, 1 | 4);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeType === 3) node.textContent = replace(node.textContent);
    else if (node.nodeType === 1) {
      for (const attr of [...node.attributes]) if (pattern.test(attr.value)) { pattern.lastIndex = 0; node.setAttribute(attr.name, replace(attr.value)); } else pattern.lastIndex = 0;
    }
  }
}

function doneFor(course) { return Array.isArray(progress[course.id]) ? [...new Set(progress[course.id].filter(i => Number.isInteger(i) && i >= 0 && i < course.lessons.length))] : []; }
function renderCourses() {
  const filtered = courses.filter(c => (activeFilter === 'all' || c.category === activeFilter) && `${c.title} ${c.categoryLabel} ${c.description}`.toLowerCase().includes(query));
  document.getElementById('courseCount').textContent = String(courses.length).padStart(2,'0');
  document.getElementById('emptyState').hidden = filtered.length > 0;
  renderDashboard();
  if (typeof renderStudyDashboard === 'function') renderStudyDashboard();
  renderSavedLessons();
  resetTextSlots();
  grid.innerHTML = filtered.map(c => `<article class="course-card"><button class="card-button" data-course="${slotText(c.id)}" aria-label="Open ${slotText(c.title)} course"><div class="card-art ${slotText(c.art)}"><span class="card-art-label">SAYANOX / LEARN</span><span class="card-art-icon">${slotText(c.icon)}</span><span class="card-orbit">✳ &nbsp; 100% FREE</span></div><div class="card-content"><div class="card-tags"><span class="tag">${slotText(c.categoryLabel)}</span><span>BEGINNER</span></div><h3>${slotText(c.title)}</h3><p>${slotText(c.description)}</p><div class="card-meta"><span>▤ &nbsp; ${c.lessons.length} lessons</span><span>✳ &nbsp; Free certificate</span><span>${doneFor(c).length ? `${doneFor(c).length}/${c.lessons.length} complete` : 'Start course ↗'}</span></div></div></button></article>`).join('');
  hydrateTextSlots(grid);
}
function stopRunner() {
  if (activeWorker) activeWorker.terminate();
  activeWorker = null;
  if (runTimer) clearTimeout(runTimer);
  runTimer = null;
}
function defaultCode(course, index) {
  const code = course.lessons[index].code;
  if (course.id === 'web' && !/<(?:body|h1)/i.test(code)) return code + '\n<body>\n  <h1>Hello, web!</h1>\n  <p>Edit this page and run the preview.</p>\n</body>';
  return code;
}
function openCourse(id) {
  currentCourse = courses.find(c => c.id === id);
  if (!currentCourse) return;
  const done = doneFor(currentCourse);
  currentLesson = currentCourse.lessons.findIndex((_, i) => !done.includes(i));
  if (currentLesson < 0) currentLesson = 0;
  currentView = 'intro';
  quizResult = null;
  quizRetryAnswers = null;
  lastCourse = currentCourse.id;
  writeStored('sayanox-last-course', lastCourse);
  editorDraft = lessonDraft(currentCourse, currentLesson);
  renderDashboard();
  renderDialog();
  dialog.setAttribute('aria-label', currentCourse.title);
  if (!dialog.open) dialog.showModal();
  if (typeof startStudyTimer === 'function') startStudyTimer();
}
function renderDialog() {
  disposeReadingProgress();
  stopRunner();
  resetTextSlots();
  const c = currentCourse, detail = courseDetails[c.id], lesson = c.lessons[currentLesson];
  const done = doneFor(c), completed = done.length === c.lessons.length;
  const title = currentView === 'intro' ? 'Course overview' : currentView === 'certificate' ? 'Your certificate' : currentView === 'quiz' ? 'Knowledge check' : currentView === 'project' ? 'Guided project' : currentView === 'challenge' ? 'Code challenges' : lesson.title;
  const mode = detail.mode === 'javascript' && /^\s*</.test(editorDraft) ? 'html-script' : detail.mode;
  const canRun = ['python', 'sql', 'javascript', 'html', 'html-script'].includes(mode);
  let content;
  if (currentView === 'intro') {
    content = `<div class="course-kicker">WELCOME TO YOUR COURSE</div><h1>${slotText(c.title)}</h1><p class="course-lead">${slotText(detail.overview)}</p><div class="course-info-grid"><div><span>LEVEL</span><strong>Beginner</strong></div><div><span>CURRICULUM</span><strong>${c.lessons.length} introductory lessons</strong></div><div><span>LEARN AT</span><strong>Your own pace</strong></div></div><section class="learn-panel"><h2>What you'll learn</h2><ul>${detail.outcomes.map(outcome => `<li><span>✓</span>${slotText(outcome)}</li>`).join('')}</ul></section><section class="origin-panel"><div class="origin-icon">✳</div><div><h2>The story behind ${slotText(detail.subject)}</h2><p>${slotText(detail.created)}</p><p>This course is an introductory learning resource from Sayanox University, owned by Sayan Mahata. It is not a complete or accredited qualification.</p></div></section><button class="button button-dark start-lesson" data-view="lesson" data-lesson="${currentLesson}">Start learning <span>→</span></button>`;
  } else if (currentView === 'challenge') {
    const challenge = codeChallenges[c.id][challengeIndex];
    content = `<div class="course-kicker">PRACTICE WITH CODE</div><h1>Code challenges</h1><p class="course-lead">Write your solution in the practice studio, then run it against the example checks. These checks run on your device and are not secure or independently verified assessments.</p><div class="lesson-tabs">${codeChallenges[c.id].map((item, i) => `<button data-challenge-index="${i}" class="lesson-tab ${i === challengeIndex ? 'active' : ''}">Challenge ${i+1}</button>`).join('')}</div><section class="challenge-panel"><div class="challenge-icon">✦</div><div><span>CHALLENGE ${challengeIndex+1}</span><h2>${slotText(challenge.title)}</h2><p>${slotText(challenge.prompt)}</p></div></section><div class="challenge-help"><h2>Need a hint?</h2>${challenge.hints.map((hint, i) => `<details><summary>Hint ${i+1}</summary><p>${slotText(hint)}</p></details>`).join('')}<p>Run your code once in this session to reveal an example solution. The checks and solution are public learning aids.</p><details id="challengeSolution" ${challengeAttempts.has(`${c.id}-${challengeIndex}`) ? '' : 'hidden'}><summary>Show example solution</summary><pre><code>${slotText(challenge.solution)}</code></pre><button class="secondary-button" type="button" data-action="copy-solution">Copy solution</button><span id="solutionCopyStatus" role="status" aria-live="polite"></span></details></div><p class="completion-note">Your draft is stored in this browser. The example checks are visible in the source and do not verify a credential.</p>`;
  } else if (currentView === 'project') {
    const project = courseProjects[c.id], finished = projectDone(c);
    content = `<div class="course-kicker">${slotText(project.level)} &nbsp; / &nbsp; GUIDED PROJECT</div><h1>${slotText(project.title)}</h1><p class="course-lead">${slotText(project.brief)}</p><div class="project-progress"><div><span>YOUR PROJECT CHECKLIST</span><strong id="projectCount">${finished.length} / ${project.tasks.length} steps</strong></div><div class="progress-track"><div id="projectProgress" class="progress-fill" style="width:${finished.length / project.tasks.length * 100}%"></div></div><small id="projectStatus" role="status">Self-tracked progress · saved in this browser when available</small></div><section class="project-section"><h2>What you'll practice</h2><ul class="project-outcomes">${project.outcomes.map(outcome => `<li>✓ &nbsp; ${slotText(outcome)}</li>`).join('')}</ul></section><section class="project-section"><div class="section-line"><h2>Build it step by step</h2><span>CHECK AS YOU GO</span></div><p>Use the practice studio or the recommended external tool. Your checklist is self-reported and does not submit or evaluate your work.</p><div class="project-tasks">${project.tasks.map((task, i) => `<label class="project-task"><input type="checkbox" data-project-task="${i}" ${finished.includes(i) ? 'checked' : ''}><span><small>STEP ${String(i+1).padStart(2,'0')}</small>${slotText(task)}</span></label>`).join('')}</div></section><section class="project-review"><span>SELF-REVIEW</span><h2>Before you finish</h2><ul>${project.review.map(item => `<li>${slotText(item)}</li>`).join('')}</ul></section><section class="project-stretch"><span>✦</span><div><strong>Go further</strong><p>${slotText(project.stretch)}</p></div></section><p class="completion-note">This is a self-guided project; no automated code review, instructor feedback or certificate verification is provided.</p>`;
  } else if (currentView === 'quiz') {
    const questions = quizFor(c);
    const best = Number.isInteger(quizScores[c.id]) ? quizScores[c.id] : null;
    content = `<div class="course-kicker">CHECK YOUR UNDERSTANDING</div><h1>Knowledge check</h1><p class="course-lead">Put the concepts into practice with ${questions.length} short questions. You can retry as often as you like. This optional check does not determine certificate eligibility.</p>${best !== null ? `<div class="quiz-best">✳ &nbsp; Best score in this browser: <strong>${best} / ${questions.length}</strong></div>` : ''}${quizResult ? `<div class="quiz-result" role="status"><span>YOUR RESULT</span><strong>${quizResult.score} / ${questions.length}</strong><p>${quizResult.score === questions.length ? 'Excellent work! Review the explanations to reinforce what you learned.' : 'Keep going! Review the explanations and try again.'}</p></div>` : ''}<form id="quizForm" class="quiz-form">${questions.map((item, i) => `<fieldset class="quiz-question"><legend><span>${String(i + 1).padStart(2, '0')}</span> ${slotText(item.q)}</legend>${quizRetryAnswers && quizRetryAnswers[i] !== null ? `<input type="hidden" name="question${i}" value="${quizRetryAnswers[i]}">` : ''}${item.options.map((option, j) => `<label class="quiz-option"><input type="radio" name="question${i}" value="${j}" required ${quizRetryAnswers && quizRetryAnswers[i] !== null ? 'disabled' : ''} ${(quizResult && quizResult.answers[i] === j) || (quizRetryAnswers && quizRetryAnswers[i] === j) ? 'checked' : ''}><span>${slotText(option)}</span></label>`).join('')}${quizResult ? `<div class="quiz-explanation ${quizResult.answers[i] === item.answer ? 'correct' : ''}"><strong>${quizResult.answers[i] === item.answer ? 'Correct' : `Correct answer: ${slotText(item.options[item.answer])}`}</strong> — ${slotText(item.explanation)}</div>` : ''}</fieldset>`).join('')}<button class="button button-dark" type="submit">${quizResult ? 'Check answers again ↗' : 'Check my answers ↗'}</button>${quizResult && quizResult.score < questions.length ? '<button class="secondary-button" type="button" data-action="retry-wrong">Retry wrong answers</button>' : ''}${quizResult || quizRetryAnswers ? '<button class="secondary-button" type="button" data-action="retry-quiz">Start over</button>' : ''}</form>`;
  } else if (currentView === 'certificate') {
    content = `<div class="course-kicker">CELEBRATE YOUR PROGRESS</div><h1>Your certificate</h1><p class="course-lead">Your effort deserves to be celebrated. Complete each lesson to create a personalized certificate of completion.</p><div class="certificate-form course-certificate"><h3>✳ &nbsp; Certificate of completion</h3>${completed ? `<p>Congratulations! Enter the name you want to appear on your certificate.</p><form id="certificateForm"><div class="form-row"><input name="studentName" maxlength="80" required placeholder="Your full name" aria-label="Your full name for the certificate"><button class="button button-dark" type="submit">Create certificate ↗</button></div></form><p class="form-note">Choose “Save as PDF” in your print dialog. This is a self-reported completion keepsake, not an exam-based or independently verified credential.</p>` : `<p>Complete ${c.lessons.length - done.length} more lesson${c.lessons.length - done.length === 1 ? '' : 's'} to unlock your certificate. Your progress is stored in this browser.</p><button class="secondary-button" data-view="lesson" data-lesson="${currentLesson}">Continue learning →</button>`}</div>`;
  } else {
    content = `<div data-reading-content><div class="lesson-heading-row"><div class="course-kicker">LESSON ${String(currentLesson + 1).padStart(2, '0')} / ${String(c.lessons.length).padStart(2, '0')}</div><button class="bookmark-button" data-action="bookmark" aria-pressed="${Boolean(bookmarks[lessonKey('bookmark')])}">${bookmarks[lessonKey('bookmark')] ? '★ Saved' : '☆ Save lesson'}</button></div><h1>${slotText(title)}</h1><p class="lesson-meta">Beginner · About ${lessonMinutes(lesson)} minutes</p><div class="reading-progress"><label for="readingProgress">Reading progress</label><progress id="readingProgress" max="100" value="0" aria-label="Reading progress"></progress></div><p class="course-lead">${slotText(lesson.text)}</p><section class="learn-panel"><div class="section-line"><h2>Example</h2><span>READ &amp; EXPLORE</span></div><p>Read through this example, then edit it in the practice workspace.</p><pre><code id="lessonExample">${slotText(lesson.code)}</code></pre><button class="secondary-button" type="button" data-action="copy-example">Copy example</button><span id="exampleCopyStatus" role="status" aria-live="polite"></span></section><section class="challenge-panel"><div class="challenge-icon">✦</div><div><span>YOUR TURN</span><h2>Practice challenge</h2><p>${slotText(lesson.practice)}</p></div></section><section class="notes-panel"><div><h2>My lesson notes</h2><span id="notesStatus" aria-live="polite">Stored on this device when available</span></div><label class="sr-only" for="lessonNotes">Notes for this lesson</label><textarea id="lessonNotes" maxlength="20000" placeholder="Write down what you learned, questions, or ideas to revisit…"></textarea><p>Your notes are private to this browser and may be lost if site data is cleared.</p><button class="secondary-button" type="button" data-action="download-notes">Download lesson &amp; notes (.md)</button></section><div class="lesson-actions"><button class="secondary-button" data-action="previous" ${currentLesson === 0 ? 'disabled' : ''}>← Previous</button><button class="button button-dark" data-action="complete">${done.includes(currentLesson) ? 'Completed ✓' : 'Mark as complete ✓'}</button><button class="secondary-button" data-action="next" ${currentLesson === c.lessons.length-1 ? 'disabled' : ''}>Next lesson →</button></div><p class="completion-note">Mark a lesson complete after reading and practicing. Completion is self-reported.</p></div>`;
  }
  dialogContent.innerHTML = `<header class="classroom-top"><button class="classroom-back close-dialog">← <span>All courses</span></button><div class="classroom-brand"><span>✳</span> SAYANOX <small>UNIVERSITY</small></div><div class="classroom-top-right"><button class="focus-toggle" data-action="focus" aria-pressed="${dialog.classList.contains('focus-mode')}">◐ Focus mode</button><button class="close-dialog classroom-close" aria-label="Close course">×</button></div></header><div class="classroom-layout"><aside class="classroom-sidebar"><div class="sidebar-course"><span class="sidebar-label">YOUR LEARNING SPACE</span><h2>${slotText(c.title)}</h2><div class="sidebar-progress"><span>Course progress</span><strong>${Math.round(done.length / c.lessons.length * 100)}%</strong></div><div class="progress-track"><div class="progress-fill" style="width:${done.length / c.lessons.length * 100}%"></div></div><small>${done.length} of ${c.lessons.length} lessons completed</small>${storageAvailable ? '' : '<p class="storage-warning" role="status">Browser storage is unavailable. Changes may be lost when you leave.</p>'}</div><nav class="curriculum-nav" aria-label="Course navigation"><button data-view="intro" class="curriculum-link ${currentView === 'intro' ? 'selected' : ''}"><span>◈</span> Course overview</button><div class="curriculum-heading">COURSE CONTENT <span>${c.lessons.length} LESSONS</span></div>${c.lessons.map((l,i) => `<button data-view="lesson" data-lesson="${i}" class="curriculum-link ${currentView === 'lesson' && i === currentLesson ? 'selected' : ''}"><span class="lesson-indicator ${done.includes(i) ? 'done' : ''}">${done.includes(i) ? '✓' : String(i+1).padStart(2,'0')}</span><span>${slotText(l.title)}</span>${bookmarks[lessonKey('bookmark', c, i)] ? '<span class="bookmark-mark" aria-label="Saved lesson">★</span>' : ''}</button>`).join('')}${codeChallenges[c.id] ? `<button data-view="challenge" class="curriculum-link ${currentView === 'challenge' ? 'selected' : ''}"><span>⌘</span> Code challenges</button>` : ''}<button data-view="project" class="curriculum-link ${currentView === 'project' ? 'selected' : ''}"><span>▧</span> Guided project <span class="lock-status">${projectDone(c).length}/${courseProjects[c.id].tasks.length}</span></button><button data-view="quiz" class="curriculum-link ${currentView === 'quiz' ? 'selected' : ''}"><span>◇</span> Knowledge check <span class="lock-status">${Number.isInteger(quizScores[c.id]) ? `${quizScores[c.id]}/${quizzes[c.id].length}` : ''}</span></button><button data-view="certificate" class="curriculum-link cert-link ${currentView === 'certificate' ? 'selected' : ''}"><span>✳</span> Your certificate <span class="lock-status">${completed ? '✓' : '○'}</span></button></nav><button class="reset-progress" data-action="reset-progress">Reset course progress</button><div class="sidebar-help">LEARN WITH PURPOSE<br><span>Small steps. Real progress.</span></div></aside><main class="classroom-content"><div class="content-wrap"><div class="breadcrumb">COURSES <span>/</span> ${slotText(c.title.toUpperCase())} <span>/</span> ${slotText(title.toUpperCase())}</div>${content}${currentView === 'intro' ? `<button class="mobile-continue" data-view="lesson" data-lesson="${currentLesson}">Continue learning →</button>` : ''}<div class="content-footer"><span>SAYANOX UNIVERSITY</span><a href="${slotText(detail.resource)}" target="_blank" rel="noopener noreferrer">${slotText(detail.resourceLabel)} ↗</a></div></div></main><aside class="studio"><div class="studio-header"><div><span>YOUR PRACTICE SPACE</span><h2>Practice studio <i>✳</i></h2></div><span class="studio-live">● READY</span></div><p class="studio-description">${slotText(detail.environment)}</p><div class="editor-window"><div class="editor-bar"><span>● &nbsp; ${slotText(detail.subject)}</span><div class="editor-controls"><button data-action="copy-code" title="Copy code">Copy</button><button data-action="reset" title="Reset code">Reset ↺</button></div></div><label class="sr-only" for="practiceEditor">Practice editor</label><textarea id="practiceEditor" spellcheck="false" maxlength="20000" aria-label="Practice editor"></textarea><div class="editor-bottom"><span>${slotText(canRun ? 'CTRL / ⌘ + ENTER TO RUN' : 'SCRATCHPAD')}</span>${canRun ? '<button data-action="run" class="run-button">▶ Run code</button>' : `<a class="run-button" href="${slotText(detail.resource)}" target="_blank" rel="noopener noreferrer">Open resource ↗</a>`}</div></div><div class="output-window"><div class="output-header"><span>⌘ &nbsp; OUTPUT</span><button data-action="clear-output">Clear</button></div><pre id="studioOutput" aria-live="polite">${canRun ? 'Your output will appear here after you run your code.' : 'Use this space to write and edit. This course requires an external tool or local environment to run code.'}</pre><iframe id="previewFrame" title="Sandboxed code preview" sandbox="allow-scripts" hidden></iframe></div><p class="editor-save-status" id="draftStatus" aria-live="polite">Drafts are stored in this browser when available</p><div class="studio-tip"><span>✧</span><p><strong>Learn by doing.</strong><br>Experiment, make mistakes and try again. That’s how skills grow.</p></div><a class="studio-resource" href="${slotText(detail.resource)}" target="_blank" rel="noopener noreferrer">${slotText(detail.resourceLabel)} ↗</a></aside></div>`;
  hydrateTextSlots(dialogContent);
  const editor = document.getElementById('practiceEditor');
  if (editor) editor.value = editorDraft;
  const notes = document.getElementById('lessonNotes');
  if (notes) notes.value = readStored(lessonKey('notes')) || '';
  if (currentView === 'lesson') { highlightExample(document.getElementById('lessonExample'), lesson.code, c.id); setupReadingProgress(); }
  if (dialog.open) { const heading = dialogContent.querySelector('.content-wrap h1'); if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({preventScroll:true}); } }
}
function runCode() {
  const editor = document.getElementById('practiceEditor');
  const output = document.getElementById('studioOutput');
  const frame = document.getElementById('previewFrame');
  editorDraft = editor.value;
  stopRunner();
  if (currentView === 'challenge') { challengeAttempts.add(`${currentCourse.id}-${challengeIndex}`); const solution = document.getElementById('challengeSolution'); if (solution) solution.hidden = false; }
  let mode = courseDetails[currentCourse.id].mode;
  if (mode === 'javascript' && /^\s*</.test(editorDraft)) mode = 'html-script';
  if (mode === 'html' || mode === 'html-script') {
    const markup = editorDraft;
    frame.hidden = false;
    frame.onload = () => frame.contentWindow.postMessage({markup, allowScripts: mode === 'html-script'}, '*');
    frame.src = 'preview.html';
    output.textContent = 'Preview rendered in a sandbox below.';
    return;
  }
  frame.hidden = true;
  output.textContent = 'Starting runtime…';
  try {
    const worker = new Worker('runner-worker.js');
    activeWorker = worker;
    runTimer = setTimeout(() => { if (activeWorker === worker) { stopRunner(); output.textContent = 'Execution timed out. Check for an infinite loop or a slow runtime download, then try again.'; } }, 45000);
    worker.onmessage = ({data}) => {
      if (worker !== activeWorker) return;
      if (data.status) output.textContent = data.status;
      if (typeof data.output === 'string') { output.textContent = data.output; stopRunner(); }
    };
    worker.onerror = () => { if (worker === activeWorker) { output.textContent = 'Unable to start the runtime. Check your connection and try again.'; stopRunner(); } };
    worker.postMessage({mode, code:editorDraft, seed:currentCourse.id === 'sql' && currentLesson > 0, challengeTests: currentView === 'challenge' ? codeChallenges[currentCourse.id][challengeIndex].tests : ''});
  } catch { output.textContent = 'Your browser could not start the practice runtime.'; }
}
function printCertificate(name, course) {
  if (!globalThis.crypto || !globalThis.crypto.getRandomValues) { window.alert('Secure random ID generation is unavailable.'); return; }
  const bytes = new Uint8Array(16);
  globalThis.crypto.getRandomValues(bytes);
  const id = 'SU-' + [...bytes].map(n => n.toString(16).padStart(2, '0')).join('').toUpperCase();
  let certificates;
  try { certificates = JSON.parse(localStorage.getItem('sayanox-certificates-v1') || '[]'); if (!Array.isArray(certificates)) throw new Error('Invalid certificate data'); } catch { window.alert('Certificate storage is unavailable.'); return; }
  certificates.push({id, name, course: course.title, date: new Date().toISOString()});
  if (!writeStored('sayanox-certificates-v1', JSON.stringify(certificates))) { window.alert('Could not save the certificate ID in this browser.'); return; }
  resetTextSlots();
  const date = new Intl.DateTimeFormat('en-GB', {day:'numeric',month:'long',year:'numeric'}).format(new Date());
  document.getElementById('printArea').innerHTML = `<div class="print-certificate"><div class="print-brand">✳ &nbsp; SAYANOX UNIVERSITY</div><h1>Certificate of Completion</h1><h2>Celebrating your learning journey</h2><p>This certificate is proudly presented to</p><div class="print-name">${slotText(name)}</div><p>for completing the self-paced course</p><h2>${slotText(course.title)}</h2><p>Completed on ${date}</p><p>Certificate ID: ${slotText(id)}</p><p><small>This checks the ID format only. Certificates are self-reported and not independently verified.</small></p><div class="print-signatures"><div>${slotText(name)}<small>STUDENT</small></div><div>Sayan Mahata<small>OWNER, SAYANOX</small></div></div></div>`;
  hydrateTextSlots(document.getElementById('printArea'));
  window.print();
}
document.getElementById('lessonSearchPanel').hidden = false;
document.getElementById('lessonSearchInput').addEventListener('input', e => renderLessonSearch(e.target.value));
document.getElementById('lessonSearchResults').addEventListener('click', e => { const button = e.target.closest('[data-search-course]'); if (!button) return; const course = courses.find(c => c.id === button.dataset.searchCourse); const index = Number(button.dataset.searchLesson); if (!course || !Number.isInteger(index) || index < 0 || index >= course.lessons.length) return; openCourse(course.id); currentLesson = index; currentView = 'lesson'; editorDraft = lessonDraft(course, index); renderDialog(); });
document.getElementById('savedLessons').addEventListener('click', e => { const button = e.target.closest('[data-revisit-course]'); if (!button) return; openCourse(button.dataset.revisitCourse); currentLesson = Number(button.dataset.revisitLesson); currentView = 'lesson'; editorDraft = lessonDraft(currentCourse, currentLesson); renderDialog(); });
document.getElementById('learningDashboard').addEventListener('click', e => { const button = e.target.closest('[data-resume]'); if (button) openCourse(button.dataset.resume); });
grid.addEventListener('click', e => { const button = e.target.closest('[data-course]'); if(button) openCourse(button.dataset.course); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { activeFilter = button.dataset.filter; document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === button)); renderCourses(); }));
document.getElementById('searchInput').addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); renderCourses(); });
dialogContent.addEventListener('input', e => {
  if (e.target.id === 'practiceEditor') { editorDraft = e.target.value; const ok = writeStored(currentView === 'challenge' ? challengeKey() : lessonKey('draft'), editorDraft); document.getElementById('draftStatus').textContent = ok ? 'Draft saved in this browser' : 'Draft could not be saved on this device'; }
  if (e.target.id === 'lessonNotes') { const ok = writeStored(lessonKey('notes'), e.target.value); document.getElementById('notesStatus').textContent = ok ? 'Saved on this device' : 'Could not save on this device'; }
});
dialogContent.addEventListener('change', e => {
  if (!e.target.matches('[data-project-task]') || !currentCourse) return;
  const task = Number(e.target.dataset.projectTask), done = projectDone(currentCourse);
  if (!Number.isInteger(task) || task < 0 || task >= courseProjects[currentCourse.id].tasks.length) return;
  const next = e.target.checked ? [...new Set([...done, task])] : done.filter(i => i !== task);
  projectMemory[currentCourse.id] = next;
  const saved = writeStored(`sayanox-project-${currentCourse.id}`, JSON.stringify(next));
  const total = courseProjects[currentCourse.id].tasks.length;
  document.getElementById('projectCount').textContent = `${next.length} / ${total} steps`;
  document.getElementById('projectProgress').style.width = `${next.length / total * 100}%`;
  document.getElementById('projectStatus').textContent = saved ? 'Self-tracked progress · saved in this browser' : 'Could not save progress on this device';
  const navCount = dialogContent.querySelector('[data-view="project"] .lock-status');
  if (navCount) navCount.textContent = `${next.length}/${total}`;
});
dialogContent.addEventListener('keydown', e => {
  if (e.target.id !== 'practiceEditor') return;
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { const runButton = dialogContent.querySelector('[data-action="run"]'); if (runButton) { e.preventDefault(); runCode(); } }
});
dialogContent.addEventListener('click', e => {
  if (e.target.closest('.close-dialog')) { stopRunner(); dialog.close(); return; }
  const challengeButton = e.target.closest('[data-challenge-index]');
  if (challengeButton && currentView === 'challenge') { challengeIndex = Number(challengeButton.dataset.challengeIndex); editorDraft = challengeDraft(); renderDialog(); return; }
  const viewButton = e.target.closest('[data-view]');
  if (viewButton) {
    stopRunner();
    currentView = viewButton.dataset.view;
    if (currentView === 'challenge') { challengeIndex = 0; editorDraft = challengeDraft(); }
    else if (currentView !== 'lesson') editorDraft = lessonDraft(currentCourse, currentLesson);
    if (currentView === 'lesson') { currentLesson = Number(viewButton.dataset.lesson); editorDraft = lessonDraft(currentCourse, currentLesson); }
    renderDialog(); return;
  }
  const action = e.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if (action === 'run') { runCode(); return; }
  if (action === 'focus') { const on = dialog.classList.toggle('focus-mode'); e.target.closest('[data-action="focus"]').setAttribute('aria-pressed', String(on)); return; }
  if (action === 'bookmark') { const key = lessonKey('bookmark'); if (bookmarks[key]) delete bookmarks[key]; else bookmarks[key] = true; writeStored('sayanox-bookmarks', JSON.stringify(bookmarks)); renderSavedLessons(); renderDialog(); return; }
  if (action === 'retry-wrong' && quizResult) { const questions = quizFor(currentCourse); quizRetryAnswers = quizResult.answers.map((answer, i) => answer === questions[i].answer ? answer : null); quizResult = null; renderDialog(); return; }
  if (action === 'retry-quiz') { quizResult = null; quizRetryAnswers = null; renderDialog(); return; }
  if (action === 'reset-progress') { if (window.confirm('Reset lesson completion and quiz score for this course? Your notes and code drafts will be kept.')) { delete progress[currentCourse.id]; delete quizScores[currentCourse.id]; quizResult = null; quizRetryAnswers = null; saveProgress(); writeStored('sayanox-quiz-scores', JSON.stringify(quizScores)); renderCourses(); renderDialog(); } return; }
  if (action === 'copy-example') { copyLearningCode(currentCourse.lessons[currentLesson].code, 'exampleCopyStatus'); return; }
  if (action === 'copy-solution' && currentView === 'challenge' && challengeAttempts.has(`${currentCourse.id}-${challengeIndex}`)) { copyLearningCode(codeChallenges[currentCourse.id][challengeIndex].solution, 'solutionCopyStatus'); return; }
  if (action === 'download-notes') { exportLessonNotes(); return; }
  if (action === 'copy-code') { const status = document.getElementById('draftStatus'); if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(document.getElementById('practiceEditor').value).then(() => { status.textContent = 'Code copied to clipboard'; }).catch(() => { status.textContent = 'Could not copy. Select the code and copy it manually.'; }); else status.textContent = 'Clipboard unavailable. Select the code and copy it manually.'; return; }
  if (action === 'clear-output') { stopRunner(); document.getElementById('studioOutput').textContent = 'Output cleared.'; const frame = document.getElementById('previewFrame'); frame.hidden = true; frame.onload = null; frame.removeAttribute('src'); return; }
  if (action === 'reset') { stopRunner(); editorDraft = currentView === 'challenge' ? codeChallenges[currentCourse.id][challengeIndex].starter : defaultCode(currentCourse, currentLesson); writeStored(currentView === 'challenge' ? challengeKey() : lessonKey('draft'), editorDraft); document.getElementById('practiceEditor').value = editorDraft; document.getElementById('studioOutput').textContent = 'Example restored.'; const frame = document.getElementById('previewFrame'); frame.hidden = true; frame.onload = null; frame.removeAttribute('src'); return; }
  if (action === 'previous' && currentLesson > 0) { currentLesson--; editorDraft = lessonDraft(currentCourse, currentLesson); }
  if (action === 'next' && currentLesson < currentCourse.lessons.length-1) { currentLesson++; editorDraft = lessonDraft(currentCourse, currentLesson); }
  if (action === 'complete') { const done = doneFor(currentCourse); if (!done.includes(currentLesson)) { if (!window.confirm('Mark this lesson as complete? Completion is self-reported.')) return; done.push(currentLesson); if (typeof recordStudyLesson === 'function') recordStudyLesson(); } progress[currentCourse.id] = done; saveProgress(); renderCourses(); }
  stopRunner(); renderDialog();
});
dialog.addEventListener('close', () => { disposeReadingProgress(); stopRunner(); if (typeof stopStudyTimer === 'function') stopStudyTimer(); });
dialogContent.addEventListener('submit', e => {
  if (e.target.id === 'quizForm') {
    e.preventDefault();
    const questions = quizFor(currentCourse);
    const data = new FormData(e.target);
    const answers = questions.map((_, i) => { const value = data.get(`question${i}`); return value === null ? -1 : Number(value); });
    if (answers.some((answer, i) => !Number.isInteger(answer) || answer < 0 || answer >= questions[i].options.length)) return;
    const score = answers.reduce((sum, answer, i) => sum + Number(answer === questions[i].answer), 0);
    quizResult = {score, answers};
    quizScores[currentCourse.id] = Math.max(Number.isInteger(quizScores[currentCourse.id]) ? quizScores[currentCourse.id] : 0, score);
    writeStored('sayanox-quiz-scores', JSON.stringify(quizScores));
    if (typeof renderStudyDashboard === 'function') renderStudyDashboard();
    renderDialog();
    dialogContent.querySelector('.quiz-result')?.scrollIntoView?.({block:'nearest'});
    return;
  }
  if (e.target.id !== 'certificateForm') return;
  e.preventDefault();
  const input = e.target.elements.studentName; const name = input.value.trim();
  if (!name) { input.setCustomValidity('Please enter your name.'); input.reportValidity(); input.addEventListener('input', () => input.setCustomValidity(''), {once:true}); return; }
  if (doneFor(currentCourse).length === currentCourse.lessons.length) printCertificate(name, currentCourse);
});
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
const menu = document.getElementById('menuToggle');
menu.addEventListener('click', () => { const open = document.getElementById('navLinks').classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
document.getElementById('navLinks').addEventListener('click', e => { if (e.target.closest('a')) { document.getElementById('navLinks').classList.remove('open'); menu.setAttribute('aria-expanded','false'); } });
renderCourses();
const requestedCourse = new URLSearchParams(window.location.search).get('course');
if (requestedCourse && courses.some(course => course.id === requestedCourse)) openCourse(requestedCourse);
