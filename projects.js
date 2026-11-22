// Self-guided project briefs: learners assess their own work; no remote submission.
const courseProjects = {
  python: {
    title:'Build a command-line study tracker', level:'BEGINNER PROJECT',
    brief:'Create a small program that records study sessions and summarizes the time spent on each topic.',
    outcomes:['Practice functions, lists and dictionaries','Validate input and handle errors','Test your program with normal and edge cases'],
    tasks:['Create a function to add a topic and a non-negative number of minutes.','Store several sessions and calculate total minutes for each topic.','Handle invalid numeric input without crashing.','Test an empty list, zero minutes and multiple sessions.','Write a short README explaining how to run your program.'],
    review:['Are functions small and clearly named?','Does the program reject invalid input?','Do the totals match your hand-calculated examples?'],
    stretch:'Save and reload sessions using JSON, then add a simple menu.'
  },
  rust: {
    title:'Build a safe unit converter', level:'BEGINNER PROJECT',
    brief:'Write a Rust program that converts temperatures between Celsius and Fahrenheit and handles invalid input.',
    outcomes:['Work with functions and numeric types','Practice Result and match','Use the Rust compiler to catch mistakes'],
    tasks:['Create a Cargo project and write conversion functions.','Read a temperature and conversion direction from input.','Handle invalid numbers using Result rather than panicking.','Test freezing and boiling points in both directions.','Document the commands needed to build and run the project.'],
    review:['Are errors handled clearly?','Do conversion functions return the expected values?','Does cargo test or your manual test plan cover edge cases?'],
    stretch:'Add unit tests with approximate floating-point comparisons.'
  },
  c: {
    title:'Build a number statistics tool', level:'BEGINNER PROJECT',
    brief:'Read a small collection of integers and report its minimum, maximum and average.',
    outcomes:['Use arrays, loops and functions','Validate input and array bounds','Compile with warnings enabled'],
    tasks:['Read up to a fixed maximum number of integers.','Write functions to calculate the minimum, maximum and average.','Handle an empty collection and invalid input safely.','Compile with gcc -Wall -Wextra and address warnings.','Test negative values, one value and the maximum allowed count.'],
    review:['Are array bounds checked?','Does the program avoid dividing by zero?','Do the calculations match hand-worked examples?'],
    stretch:'Extract the statistics functions into a separate source file and header.'
  },
  web: {
    title:'Build an accessible personal page', level:'BEGINNER PROJECT',
    brief:'Create a responsive personal introduction page using semantic HTML and CSS.',
    outcomes:['Use semantic structure and accessible content','Create responsive layouts','Check a design on different screen sizes'],
    tasks:['Add a meaningful page title, heading and introduction.','Use semantic sections and descriptive link text.','Style the page with a readable color palette and spacing.','Add a responsive layout for narrow screens.','Test keyboard navigation, contrast and mobile layout.'],
    review:['Is every heading meaningful and in a logical order?','Can the page be used with only a keyboard?','Does content fit without horizontal scrolling on a phone?'],
    stretch:'Add a project gallery and respect reduced-motion preferences.'
  },
  javascript: {
    title:'Build an interactive task list', level:'BEGINNER PROJECT',
    brief:'Create a small browser page where a learner can add and mark study tasks as complete.',
    outcomes:['Handle events and update the DOM','Work with arrays and functions','Consider accessibility and input validation'],
    tasks:['Create an HTML input, button and task list.','Add a task when the form is submitted.','Allow tasks to be marked complete.','Reject empty input and render user text safely with textContent.','Test keyboard interaction and repeated submissions.'],
    review:['Can the interface be used by keyboard?','Does empty input get rejected?','Is user input treated as text rather than HTML?'],
    stretch:'Save the tasks to localStorage and add a remove button.'
  },
  cs: {
    title:'Design and test a search algorithm', level:'BEGINNER PROJECT',
    brief:'Develop a clear procedure to find a target in a list, then reason about correctness and cost.',
    outcomes:['Translate a problem into an algorithm','Compare test cases and edge cases','Explain runtime in terms of input size'],
    tasks:['Define the input, expected output and behavior when the target is missing.','Write pseudocode for a linear search.','Implement it in a language of your choice.','Test an empty list, first and last positions, duplicates and a missing target.','Explain why the worst-case runtime is O(n).'],
    review:['Do the examples cover edge cases?','Does the result match the stated behavior?','Is the complexity explanation justified?'],
    stretch:'Implement binary search on sorted input and compare the trade-offs.'
  },
  go: {
    title:'Build a word counter', level:'BEGINNER PROJECT',
    brief:'Write a Go program that counts words in a line of text and reports the result.',
    outcomes:['Use Go functions, slices and maps','Process input safely','Practice basic Go testing'],
    tasks:['Create a Go module and read a line of text.','Split the text into words and count the total.','Use a map to count occurrences of each word.','Handle an empty line and normalize case consistently.','Test your program with repeated words and punctuation.'],
    review:['Is the input handling explicit?','Are repeated words counted correctly?','Does the program handle empty input?'],
    stretch:'Add table-driven tests and sort the output for predictable results.'
  },
  sql: {
    title:'Design a course library database', level:'BEGINNER PROJECT',
    brief:'Create a small relational schema for learners and courses, then write useful queries.',
    outcomes:['Define tables and keys','Insert and query records','Consider relationships and data integrity'],
    tasks:['Create courses and learners tables with primary keys.','Insert at least three courses and two learners.','Create an enrollments table connecting learners and courses.','Write a query that lists enrollments with course titles.','Test an empty result and avoid unintended updates without WHERE.'],
    review:['Do keys uniquely identify rows?','Do the joins return the expected learners and courses?','Are update and delete statements appropriately filtered?'],
    stretch:'Enable foreign keys in SQLite and add a query counting enrollments per course.'
  },
  git: {
    title:'Create a versioned learning journal', level:'BEGINNER PROJECT',
    brief:'Use Git to track a learning journal and practice a small, reviewable change.',
    outcomes:['Initialize and inspect a repository','Make meaningful commits','Use a branch to organize changes'],
    tasks:['Initialize a repository with a README and journal file.','Make an initial commit with a descriptive message.','Create a branch and add a new journal entry.','Review the change with git diff and commit it.','Merge the branch and inspect the resulting history.'],
    review:['Does each commit describe a coherent change?','Is the final working tree clean?','Does the history show the intended work?'],
    stretch:'Push to a repository you control and open a pull request for another change.'
  },
  ai: {
    title:'Plan a responsible AI experiment', level:'BEGINNER PROJECT',
    brief:'Design, but do not deploy, an experiment to classify short messages while considering data quality and risk.',
    outcomes:['Frame an ML task and select a baseline','Plan an evaluation on held-out data','Identify privacy and fairness concerns'],
    tasks:['Define the prediction task, inputs, labels and intended users.','Describe a simple baseline and how training examples would be collected.','Design separate training and evaluation sets without data leakage.','Choose an evaluation measure and include a plan to inspect errors.','Document privacy, bias and human-review safeguards.'],
    review:['Is the goal specific and measurable?','Is the evaluation separate from training?','Are potential harms and limitations acknowledged?'],
    stretch:'Compare false positives and false negatives across relevant groups using appropriately collected, consented data.'
  }
};
