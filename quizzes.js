// Short formative checks, not a proctored assessment or certificate requirement.
const quizzes = {
  python: [
    {q:'What does print() do?', options:['Displays a value','Creates a file','Imports a module'], answer:0, explanation:'print() writes a representation of a value to standard output.'},
    {q:'Which value is an integer?', options:['"42"','42','4.2'], answer:1, explanation:'42 is an integer; "42" is text and 4.2 is a floating-point number.'},
    {q:'What does a function return statement do?', options:['Starts a loop','Sends a result back to the caller','Creates a variable globally'], answer:1, explanation:'return ends the function call and sends a value to the caller.'}
  ],
  rust: [
    {q:'How do you allow a Rust variable to be reassigned?', options:['Use mut','Use const','Use static only'], answer:0, explanation:'let mut makes a binding mutable.'},
    {q:'What does borrowing normally let you do?', options:['Use a value through a reference','Create a second owner automatically','Disable the compiler'], answer:0, explanation:'A reference borrows access without taking ownership.'},
    {q:'Which type represents a recoverable operation that may fail?', options:['Result','bool','char'], answer:0, explanation:'Result contains either Ok(value) or Err(error).'}
  ],
  c: [
    {q:'Where does a typical C program begin execution?', options:['printf','main','include'], answer:1, explanation:'A hosted C program begins at main.'},
    {q:'Which C type usually stores a whole number?', options:['int','float','void'], answer:0, explanation:'int is an integer type.'},
    {q:'What does &value provide?', options:['The address of value','Twice the value','The type name'], answer:0, explanation:'The address-of operator obtains the address of an object.'}
  ],
  web: [
    {q:'What is HTML primarily used for?', options:['Page structure and meaning','Database queries','Compiling C'], answer:0, explanation:'HTML provides the structure and semantics of a web page.'},
    {q:'What is CSS primarily used for?', options:['Page presentation','Managing Git commits','Training a model'], answer:0, explanation:'CSS controls visual presentation such as color and layout.'},
    {q:'What can a media query help with?', options:['Adapting a layout to screen size','Deleting a database','Sending an email'], answer:0, explanation:'Media queries apply styles based on conditions such as viewport width.'}
  ],
  javascript: [
    {q:'What does const prevent?', options:['Reassigning the binding','Any object mutation','Running a function'], answer:0, explanation:'const prevents reassignment of the binding, but an object it references may still be mutable.'},
    {q:'What does addEventListener do?', options:['Registers a handler for an event','Creates a database','Styles an element'], answer:0, explanation:'It registers a function to respond to a specified event.'},
    {q:'Where does console.log normally write?', options:['Developer console','HTML title','CSS stylesheet'], answer:0, explanation:'console.log writes to the console or another environment-specific output.'}
  ],
  cs: [
    {q:'What is an algorithm?', options:['A sequence of steps to solve a problem','A specific computer brand','A file format'], answer:0, explanation:'An algorithm describes a sequence of operations for a task.'},
    {q:'Which structure stores values in an ordered sequence?', options:['A list','A boolean','A single integer'], answer:0, explanation:'Lists and arrays store ordered sequences of values.'},
    {q:'What does O(n) commonly describe?', options:['Work growing linearly with input size','Work always taking exactly one second','A syntax error'], answer:0, explanation:'O(n) describes an upper-bound growth rate proportional to input size.'}
  ],
  go: [
    {q:'What command runs a Go source file?', options:['go run','go push','go fetch html'], answer:0, explanation:'go run compiles and runs the specified Go program.'},
    {q:'What keyword does Go use for loops?', options:['for','repeat','loop'], answer:0, explanation:'Go uses for for its looping constructs.'},
    {q:'What is a slice?', options:['A flexible view over a sequence','A package manager','A network address'], answer:0, explanation:'A slice describes a contiguous section of an underlying array.'}
  ],
  sql: [
    {q:'Which statement retrieves data?', options:['SELECT','DELETE','DROP'], answer:0, explanation:'SELECT queries rows and columns.'},
    {q:'What does WHERE do?', options:['Filters rows','Creates a table','Changes column types'], answer:0, explanation:'WHERE limits rows according to a condition.'},
    {q:'What happens if UPDATE has no WHERE clause?', options:['All rows may be updated','Only one row changes','Nothing happens'], answer:0, explanation:'Without a filter, an UPDATE applies to all rows in the table.'}
  ],
  git: [
    {q:'What does git status show?', options:['The working tree and staging state','The weather','A running web server'], answer:0, explanation:'git status reports staged, modified and untracked files.'},
    {q:'What does git add do?', options:['Stages changes for a commit','Deletes the repository','Publishes a website'], answer:0, explanation:'git add adds changes to the staging area.'},
    {q:'Why use a branch?', options:['To develop work on a separate line','To encrypt every file','To remove commit history'], answer:0, explanation:'A branch lets you work separately before integrating changes.'}
  ],
  ai: [
    {q:'What does supervised learning use?', options:['Labeled examples','Only unlabeled data','No data at all'], answer:0, explanation:'Supervised learning learns from inputs paired with target labels.'},
    {q:'Why keep evaluation data separate?', options:['To estimate performance on unseen examples','To guarantee perfect predictions','To make training data larger'], answer:0, explanation:'Held-out data helps evaluate generalization beyond training examples.'},
    {q:'How should important AI-generated claims be treated?', options:['Verify them against reliable sources','Assume they are always true','Share private data to check them'], answer:0, explanation:'AI outputs can be wrong; verify important claims and protect private data.'}
  ]
};
// Additional questions keep the checks introductory and formative.
const additionalQuestions = {
  python: [
    {q:'What does range(1, 4) produce?', options:['1, 2, 3','1, 2, 3, 4','0, 1, 2, 3'], answer:0, explanation:'The stop value is excluded.'},
    {q:'Which operator compares equality?', options:['==','=','+='], answer:0, explanation:'== compares values; = assigns.'},
    {q:'What does len([3, 5]) return?', options:['2','8','1'], answer:0, explanation:'len counts the elements.'},
    {q:'What exception can int("hello") raise?', options:['ValueError','IndentationError','None'], answer:0, explanation:'Text that cannot be parsed as an integer raises ValueError.'},
    {q:'Why is indentation important in Python?', options:['It defines code blocks','It changes variable names','It compiles the program'], answer:0, explanation:'Indentation groups statements into blocks.'}
  ],
  rust: [
    {q:'What command creates a Cargo project?', options:['cargo new','cargo push','rust init network'], answer:0, explanation:'cargo new creates a new package.'},
    {q:'Which keyword declares a function?', options:['fn','def','function'], answer:0, explanation:'Rust functions use fn.'},
    {q:'Which symbol creates a shared reference?', options:['&','*','%'], answer:0, explanation:'& borrows a shared reference.'},
    {q:'What does match do?', options:['Selects a branch by pattern','Installs a package','Modifies all variables'], answer:0, explanation:'match compares a value to patterns.'},
    {q:'What is the purpose of ownership?', options:['Manage values and memory safely','Disable type checking','Always copy all data'], answer:0, explanation:'Ownership rules support memory safety without a garbage collector.'}
  ],
  c: [
    {q:'Which header declares printf?', options:['stdio.h','stdlib.py','math.css'], answer:0, explanation:'printf is declared in stdio.h.'},
    {q:'What ends a typical C statement?', options:[';','@',':'], answer:0, explanation:'Most statements end with a semicolon.'},
    {q:'What does a pointer store?', options:['An address','An entire source file','Only a character'], answer:0, explanation:'A pointer holds an address to an object or function.'},
    {q:'What does %d format in printf?', options:['An int','A string','A floating-point value'], answer:0, explanation:'%d formats an int in decimal.'},
    {q:'Why enable compiler warnings?', options:['To catch potential problems','To replace all testing','To remove all runtime errors'], answer:0, explanation:'Warnings highlight many potential defects but cannot replace testing.'}
  ],
  web: [
    {q:'Which element is a main page heading?', options:['h1','span','style'], answer:0, explanation:'h1 identifies a top-level heading.'},
    {q:'Which attribute supplies alternative text for an image?', options:['alt','href','lang'], answer:0, explanation:'alt provides a text alternative.'},
    {q:'Which CSS property changes text color?', options:['color','display','margin'], answer:0, explanation:'color controls foreground text color.'},
    {q:'What does display: flex enable?', options:['Flexbox layout','A database connection','Code compilation'], answer:0, explanation:'Flexbox arranges children in flexible rows or columns.'},
    {q:'Why use semantic elements?', options:['To communicate structure and meaning','To guarantee faster internet','To avoid all CSS'], answer:0, explanation:'Semantic HTML helps browsers and assistive technologies interpret content.'}
  ],
  javascript: [
    {q:'Which keyword declares a function?', options:['function','define','fn'], answer:0, explanation:'The function keyword declares a function.'},
    {q:'What does document.querySelector return?', options:['The first matching element or null','Every match as an array','Only text'], answer:0, explanation:'It returns the first matching element, or null.'},
    {q:'Which operator checks strict equality?', options:['===','=', '=>'], answer:0, explanation:'=== compares without type coercion.'},
    {q:'What is a safe way to insert user text into an element?', options:['textContent','innerHTML','eval'], answer:0, explanation:'textContent treats the value as text rather than HTML.'},
    {q:'What is an event handler?', options:['A function called in response to an event','A CSS selector','A database row'], answer:0, explanation:'Handlers respond to events such as clicks.'}
  ],
  cs: [
    {q:'What should a clear problem definition include?', options:['Inputs and expected outputs','Only a programming language','Only a variable name'], answer:0, explanation:'Inputs and outputs make the task testable.'},
    {q:'What is an edge case?', options:['A boundary or unusual input','A guaranteed average input','A hardware brand'], answer:0, explanation:'Edge cases help expose assumptions at boundaries.'},
    {q:'What is a dictionary typically used for?', options:['Looking up values by key','Storing one number only','Rendering a webpage'], answer:0, explanation:'A dictionary maps keys to values.'},
    {q:'What does an empty-list test check?', options:['Behavior with no items','Only performance on large inputs','Network availability'], answer:0, explanation:'Empty inputs reveal boundary-condition bugs.'},
    {q:'What is linear search worst-case complexity?', options:['O(n)','O(1)','O(log n)'], answer:0, explanation:'A linear search may inspect all n items.'}
  ],
  go: [
    {q:'Which package provides Println?', options:['fmt','html','git'], answer:0, explanation:'fmt provides formatted I/O.'},
    {q:'What does := do inside a function?', options:['Declares and initializes variables','Imports a package','Ends a loop'], answer:0, explanation:'Short variable declarations use :=.'},
    {q:'Which keyword returns a function result?', options:['return','break','defer'], answer:0, explanation:'return supplies values to the caller.'},
    {q:'What does range do in a for loop?', options:['Iterates over a collection','Downloads a package','Creates a class'], answer:0, explanation:'range iterates over elements or keys.'},
    {q:'What is a map used for?', options:['Key-value lookup','Displaying an image only','Compiling Rust'], answer:0, explanation:'A map stores values indexed by keys.'}
  ],
  sql: [
    {q:'What does ORDER BY do?', options:['Sorts query results','Deletes rows','Creates a table'], answer:0, explanation:'ORDER BY sorts selected results.'},
    {q:'What is a primary key?', options:['A unique row identifier','A CSS selector','A table color'], answer:0, explanation:'A primary key uniquely identifies a row.'},
    {q:'Which statement adds a row?', options:['INSERT','SELECT','DROP'], answer:0, explanation:'INSERT adds data to a table.'},
    {q:'What does NOT NULL enforce?', options:['A value must be present','A column must be numeric','Rows cannot be selected'], answer:0, explanation:'NOT NULL disallows null values in the column.'},
    {q:'Why check a DELETE WHERE clause?', options:['To avoid deleting unintended rows','To sort results','To create an index'], answer:0, explanation:'Without a filter, DELETE can remove all rows.'}
  ],
  git: [
    {q:'What is a commit?', options:['A recorded snapshot','A running web server','A browser tab'], answer:0, explanation:'A commit records a snapshot and metadata.'},
    {q:'What does git diff show?', options:['Differences between versions or changes','A user password','Only remote branches'], answer:0, explanation:'git diff displays changes between states.'},
    {q:'What does git log show?', options:['Commit history','Current CPU usage','CSS rules'], answer:0, explanation:'git log displays commit history.'},
    {q:'Why use a pull request?', options:['To review changes before merging','To replace all tests','To hide changes'], answer:0, explanation:'Pull requests support review and collaboration.'},
    {q:'Which command starts a new local repository?', options:['git init','git merge','git status'], answer:0, explanation:'git init initializes a repository.'}
  ],
  ai: [
    {q:'What is a model prediction?', options:['An estimate that can be wrong','A guaranteed fact','A privacy policy'], answer:0, explanation:'Predictions are uncertain and require evaluation.'},
    {q:'What is data leakage?', options:['Information from evaluation influencing training','Only a network outage','Encrypting a backup'], answer:0, explanation:'Leakage can make evaluation overly optimistic.'},
    {q:'Why review model errors?', options:['To understand failure modes','To guarantee perfect fairness','To skip evaluation'], answer:0, explanation:'Error analysis helps identify weaknesses.'},
    {q:'What is a baseline?', options:['A simple reference for comparison','An encryption key','A database table'], answer:0, explanation:'A baseline helps assess whether a model adds value.'},
    {q:'What should happen to private data?', options:['Protect it and limit access','Publish it by default','Put it in every prompt'], answer:0, explanation:'Limit exposure and handle sensitive information responsibly.'}
  ]
};
for (const [id, extra] of Object.entries(additionalQuestions)) quizzes[id].push(...extra);
