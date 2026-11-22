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
