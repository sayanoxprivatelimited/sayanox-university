// Additional English lesson depth and chapters. New lessons append after existing indices.
const lessonDepth = {
  "python": [
    [
      "A program is a sequence of instructions. Python reads each print call and writes its argument to the output. A quoted message is a string: the quotation marks mark where the text begins and ends, but are not printed.",
      "Predict the two output lines before running the code. Experiment by editing one message at a time; if Python reports a syntax error, check matching quotation marks and parentheses first."
    ],
    [
      "A variable is a name bound to a value. The name and age values have different types: the quoted name is text, while 18 is an integer. An f-string substitutes expressions inside braces into a new string.",
      "Reassigning a name changes the value it refers to. Try a different name and age, then inspect the output. Variable names should describe their purpose, and Python treats uppercase and lowercase names as different."
    ],
    [
      "range(1, 4) produces 1, 2 and 3; the upper bound is excluded. The for loop visits each number, and the if block runs only when number is greater than 1.",
      "Python uses indentation to define blocks. Trace the loop on paper and check the output, then change the range or comparison. Consistent indentation matters: spaces at the wrong level can change behavior or cause an error."
    ],
    [
      "A function definition names a reusable operation. When square(5) is called, the argument 5 is bound to the parameter number; the return statement passes the product back to the caller.",
      "The outer print displays the returned value. Distinguish returning from printing: a returned value can also be stored or used in another calculation. Test zero and negative inputs as well as positive ones."
    ],
    [
      "int converts valid integer text to an integer. If conversion fails, Python raises ValueError and the matching except block displays a friendly message; other exception types are not caught by this handler.",
      "The example converts a fixed string, not keyboard input. Change it to nonnumeric text to exercise the error path. Catch the specific exception you expect and avoid hiding unrelated errors during debugging."
    ]
  ],
  "javascript": [
    [
      "JavaScript runs in browsers and other environments. Here const creates a binding for the greeting string, and console.log writes its value to the output. const prevents reassignment of the binding, not every possible change to an object.",
      "Run the code and compare its result with your prediction. Change the string and run it again; keep the quotes paired. Names are case-sensitive, so greeting and Greeting are different identifiers."
    ],
    [
      "The greet function receives a name and returns a string. A nonempty name is truthy, so the first return runs; an empty string is falsy and reaches the fallback return.",
      "The caller passes the result to console.log. Try both greet(\"Mita\") and greet(\"\") to observe the branches. return passes a value back; logging it is a separate action."
    ],
    [
      "The DOM is the browser representation of a page. querySelector finds the button and paragraph by ID. addEventListener registers a callback that runs when the button is clicked.",
      "In the sandbox, the example changes textContent rather than opening an alert. Run the example, click the preview button and inspect the paragraph. Matching IDs matter, and textContent treats the message as text rather than HTML markup."
    ]
  ],
  "web": [
    [
      "An HTML document gives content structure and meaning. The html element identifies the document language, body holds visible content, h1 is a heading and p marks a paragraph.",
      "Edit the heading and paragraph and compare source with the preview. Semantic elements help browsers and assistive technology interpret the page; they are not merely visual styling instructions."
    ],
    [
      "A CSS rule connects a selector to declarations. In h1 { color: seagreen; }, h1 selects headings, color is a property and seagreen is its value. Padding adds space inside an element.",
      "The practice studio supplies a sample heading and paragraph with this style-only example. Change one declaration at a time and check readability. In a real page, ensure text and background have sufficient contrast."
    ],
    [
      "Flexbox arranges children along an axis. A media query applies rules only when its condition matches; here the direction becomes column when the viewport is 600 CSS pixels wide or less.",
      "The example defines .row but does not create an element with that class. Add a row with two children to the sample body, then resize the preview to see the layout change. Test narrow screens and keyboard access."
    ]
  ],
  "sql": [
    [
      "A table describes columns and stores rows. id is an integer primary key, so it uniquely identifies a row; title is required by NOT NULL. INSERT adds a row matching the specified columns.",
      "The SQL studio creates a fresh in-memory database on each run. Add a second row with a distinct id, and include SELECT in the same run to inspect it. A duplicate primary key is an error."
    ],
    [
      "SELECT chooses columns to return. WHERE filters rows before ORDER BY sorts the result. The example requests id and title from courses whose id is positive, sorted by title.",
      "The studio supplies sample courses for this lesson; the displayed query alone needs a courses table in a separate SQLite environment. Try filtering for id 1 and compare the returned rows."
    ],
    [
      "UPDATE changes existing rows and the WHERE clause limits which rows match. The following SELECT checks the row after the update. Omitting WHERE would apply the update to every row.",
      "The studio supplies sample rows and resets its in-memory database each run. Before changing important data elsewhere, inspect the filter with SELECT and maintain a tested backup or transaction strategy."
    ]
  ],
  "rust": [
    [
      "Rust programs are compiled before they run. A complete executable defines fn main; println! is a macro that writes a line. Cargo manages projects and invokes the toolchain.",
      "This course editor is a scratchpad, not a Rust compiler. Copy the example into a local Cargo project or the linked Rust environment, then change and rerun the message. Read compiler errors carefully."
    ],
    [
      "let introduces a binding. Rust bindings are immutable by default; mut permits reassignment. The example increments score and formats the value with the {} placeholder.",
      "Immutability makes accidental changes easier to notice. Remove mut and observe the compiler diagnostic in a Rust toolchain, then restore it. Mutability of a binding is distinct from ownership and borrowing."
    ],
    [
      "An owned String has one owner. The example borrows it through &name and prints through that reference without taking ownership, then prints the original name.",
      "References must not outlive the value they borrow. The compiler checks borrowing rules to prevent invalid access; practice by tracing when the reference is used and when the owner goes out of scope."
    ],
    [
      "A function states the type of each parameter and its return type. In this example the final expression value * 2 has no semicolon, so it is returned as an i32.",
      "The main function calls double(4) and displays 8. Try another input in a Rust toolchain. A semicolon after the final expression changes it into a statement, which changes what the function returns."
    ],
    [
      "Parsing may succeed or fail, so parse returns a Result. match handles Ok(n) and Err(e) separately, making the successful and error paths explicit.",
      "The string \"42\" parses successfully as an i32. Replace it with a word and run it in a Rust environment to see the error path. Handle the failure rather than assuming input is always valid."
    ]
  ],
  "c": [
    [
      "C source code is compiled into a program. main is the entry point and printf writes formatted output; the include directive provides the declaration for printf.",
      "The editor here does not compile C. Save the example and use a local compiler or the linked external tool. Compile with warnings enabled and read diagnostics before running your program."
    ],
    [
      "A variable declaration gives each value a type. int holds integer values within its implementation-defined range; operators such as + and * combine values. printf uses %d for an int.",
      "Change a and b, then predict the sum and product. C does not automatically check every mistake: use appropriate format specifiers, and do not assume integer overflow is harmless."
    ],
    [
      "A for loop initializes a counter, checks a condition and changes the counter on each iteration. The remainder expression i % 2 is zero for an even integer.",
      "Trace i from 1 through 5: only 2 and 4 are printed. Change the condition carefully to show odd numbers, and confirm the loop has a reachable stopping condition."
    ],
    [
      "A function has a return type, name and typed parameters. double_value receives an int and returns twice that value; main passes 4 and prints the result.",
      "Extracting a named operation makes it reusable and testable. Try inputs 0 and a negative value. For real programs, consider the range of the type and avoid signed overflow."
    ],
    [
      "A pointer stores an address. &value obtains the address of value, while *ptr reads the int at that address. The pointer is valid here because value remains alive while it is used.",
      "Never dereference a null, uninitialized or dangling pointer. Try assigning through *ptr, then print value to see the same object change. Use a compiler and debugging tools when exploring memory errors."
    ]
  ],
  "cs": [
    [
      "An algorithm is a sequence of unambiguous steps that transforms an input into an output. Before implementing one, state the problem and test examples, including equal inputs.",
      "This example compares two values and returns the larger one. Trace both branches with a table. Pseudocode is a design aid rather than executable Python; translate it into code before running it."
    ],
    [
      "A list stores ordered items, accessed by position; Python list positions start at zero. A dictionary associates keys with values, such as the key name and the value Mita.",
      "Use a list when order matters and a mapping when lookup by key fits the problem. Think about empty collections and missing keys. Run the example and explain why numbers[0] produces 10."
    ],
    [
      "Big O describes how an operation scales as input grows, not the exact time on every computer. The function visits each item once, so the loop performs work proportional to the list length.",
      "A good test set includes normal data, an empty list and boundary values such as negative numbers. Predict each result, run the function and investigate discrepancies rather than assuming the first passing example proves correctness."
    ]
  ],
  "go": [
    [
      "A Go source file declares a package and can import libraries. In an executable package main, func main is the entry point and fmt.Println prints a line.",
      "Save a complete program as main.go and use the Go toolchain or linked playground. The in-site editor is a scratchpad, not a Go compiler. Change the message and check the result in the external environment."
    ],
    [
      "A function declaration names its parameters and return type. double receives an int and returns an int. The short declaration := creates and initializes a local variable inside a function.",
      "The example separates a function declaration from statements intended for main, so combine them into a complete program before running it. Test zero and negative arguments as well as a positive one."
    ],
    [
      "A slice describes a sequence that can be iterated. The range form of for produces an index and a value; the blank identifier _ discards the index when it is not needed.",
      "This snippet belongs inside a function in a complete Go program. Trace the three values, then try an empty slice and a different set of values. Explain how the loop stops."
    ]
  ],
  "git": [
    [
      "A Git repository stores a history of snapshots. git init creates repository metadata in the current folder, while git status reports the state of tracked and untracked files.",
      "Practice in a disposable folder, not an existing project you do not understand. The studio is a command scratchpad and does not execute shell commands; use a local Git installation."
    ],
    [
      "The staging area selects changes for the next snapshot. git add stages the named file, git commit records the staged snapshot, and git log shows commit history.",
      "Inspect git status before and after staging. A clear commit message describes the change. Do not commit secrets or private files; if a secret is exposed, removing it in a later commit does not erase it from history."
    ],
    [
      "A branch is a movable reference to a line of commits. Creating a branch lets you isolate a change; merging incorporates its history into the checked-out branch.",
      "The example is for a disposable local repository. Check the actual default branch name before switching, and make a commit before merging. Shared work should be reviewed and conflicts resolved carefully."
    ]
  ],
  "ai": [
    [
      "Supervised learning uses labeled examples to learn a mapping from input to target. Unsupervised approaches look for patterns without the same kind of target labels. A model output is an estimate, not a guarantee.",
      "In spam classification, the input might be message text and the label might be spam or not spam. Consider mistakes in both directions and how data collection can affect different people."
    ],
    [
      "Training data is used to fit a model; an evaluation set is held back to estimate performance on unseen examples. Leakage occurs when information from evaluation improperly influences training or model choices.",
      "The code merely demonstrates a split of a small list, not a trained model or a meaningful performance evaluation. Real projects need representative data, suitable metrics and enough examples for a useful evaluation."
    ],
    [
      "AI output may sound confident while being wrong, incomplete, biased or inappropriate for the context. Checking important claims against reliable sources and considering who could be affected are essential.",
      "Do not paste sensitive information into a tool without understanding its policies. Keep a human responsible for decisions, record uncertainty and test for foreseeable failure cases before using outputs in consequential settings."
    ]
  ]
};
const extraLessons = {
  "python": [
    {
      "title": "Lists and iteration",
      "text": "Lists collect values in order and can be changed. Iteration lets a program process each item without writing a separate print statement.",
      "details": [
        "Create a list with square brackets and commas. Index 0 refers to the first item; accessing an index beyond the list raises IndexError. append adds an item to the end of the existing list.",
        "A for loop visits each element in order. Before running the example, predict the number of output lines; then add and remove an item and compare. Avoid modifying a list while iterating over it until you understand the consequences."
      ],
      "code": "topics = [\"Python\", \"SQL\", \"Web\"]\ntopics.append(\"Git\")\nfor topic in topics:\n    print(topic)",
      "practice": "Create a list of three study goals, add a fourth, and print each goal."
    },
    {
      "title": "Dictionaries and safe lookups",
      "text": "Dictionaries associate keys with values. They are useful when each piece of information has a descriptive name.",
      "details": [
        "A dictionary literal uses braces and key-value pairs. In the example, the keys \"name\" and \"score\" identify two values. Use square brackets to access a key you know exists.",
        "A missing key accessed with square brackets raises KeyError. The get method can supply a fallback for a missing key, which is useful when data is optional. Validate real user input rather than silently assuming every value is present."
      ],
      "code": "learner = {\"name\": \"Mita\", \"score\": 85}\nprint(learner[\"name\"])\nprint(learner.get(\"course\", \"Not selected\"))",
      "practice": "Add a course key, then compare bracket access and get for a missing key."
    }
  ],
  "javascript": [
    {
      "title": "Arrays and loops",
      "text": "Arrays keep values in order. A loop can visit each value to perform the same operation repeatedly.",
      "details": [
        "Create an array with brackets and commas. Its first item is at index 0; length reports the number of items. push adds an item to the end of the existing array.",
        "A for...of loop reads each value in order. The const binding for topics is not reassigned, although the array itself can still change. Predict the output before running it, and compare an empty array."
      ],
      "code": "const topics = [\"HTML\", \"CSS\", \"JavaScript\"];\ntopics.push(\"SQL\");\nfor (const topic of topics) {\n  console.log(topic);\n}",
      "practice": "Make an array of three goals, add another goal and log each one."
    },
    {
      "title": "Objects and properties",
      "text": "Objects group related named properties, making it easier to represent a learner, task or other concept.",
      "details": [
        "A property has a key and a value. The dot syntax reads a property when its name is known in the source code; bracket syntax can read a key held in a variable.",
        "A missing property normally produces undefined. Optional values need an explicit strategy: the nullish coalescing operator ?? selects the fallback only for null or undefined, not for values such as 0."
      ],
      "code": "const learner = { name: \"Mita\", score: 0 };\nconsole.log(learner.name);\nconsole.log(learner.score ?? \"No score\");\nconsole.log(learner.course ?? \"Not selected\");",
      "practice": "Add a course property, then compare a score of zero with an absent score."
    }
  ],
  "web": [
    {
      "title": "Semantic page structure",
      "text": "Semantic HTML uses elements that describe the role of content, making pages easier to navigate and maintain.",
      "details": [
        "A header can introduce a page, main contains its primary content, and section groups related content. Headings should reflect the document outline rather than being chosen only for their size.",
        "Use one clear main landmark and meaningful heading text. Inspect the page without CSS: its structure should still make sense. A link should describe its destination; use a button for an action rather than a fake link."
      ],
      "code": "<!doctype html>\n<html lang=\"en\">\n  <body>\n    <header><h1>My learning journal</h1></header>\n    <main><section><h2>Today</h2><p>I practiced HTML.</p></section></main>\n  </body>\n</html>",
      "practice": "Add another section with an informative heading and a short paragraph."
    },
    {
      "title": "Forms and labels",
      "text": "Forms collect input. A visible label connects a control to its purpose for mouse, touch and assistive technology users.",
      "details": [
        "The label for attribute matches the input id. This lets a user click the label to focus the field and gives the control an accessible name. Choose an appropriate type and state which fields are required.",
        "This example demonstrates structure only. The in-site preview blocks form submission, so it does not send data anywhere. A real application needs server-side validation, privacy decisions and safe handling of submitted data."
      ],
      "code": "<!doctype html>\n<html lang=\"en\">\n  <body>\n    <main><h1>Study goal</h1>\n      <form><label for=\"goal\">Your goal</label>\n        <input id=\"goal\" name=\"goal\" required>\n        <button type=\"submit\">Save goal</button>\n      </form>\n    </main>\n  </body>\n</html>",
      "practice": "Add a second labelled field and explain why the labels matter."
    }
  ],
  "sql": [
    {
      "title": "Aggregating rows",
      "text": "Aggregate functions summarize a set of rows. COUNT counts rows and can be combined with a filter.",
      "details": [
        "This example reads the sample courses table provided by the studio for later SQL lessons. COUNT(*) counts all matching rows; WHERE limits the input rows before the aggregate is calculated.",
        "The alias course_count names the result column. In a standalone SQLite environment, create and populate courses first. Compare the count with and without the WHERE clause and consider how an empty result is handled."
      ],
      "code": "SELECT COUNT(*) AS course_count\nFROM courses\nWHERE id > 0;",
      "practice": "Count all sample courses, then count only rows with id = 1."
    },
    {
      "title": "Joining related tables",
      "text": "A JOIN combines related rows from two tables using a condition that describes how they match.",
      "details": [
        "The studio seeds a courses table with IDs 1 and 2 for this lesson. The example creates a second table and matches its course_id to courses.id. A JOIN without a correct condition can create many unintended combinations.",
        "INNER JOIN returns only rows with matching keys on both sides. Add an enrollment for a nonmatching course ID and observe that it is excluded. In a real database, define foreign keys and enable enforcement as appropriate."
      ],
      "code": "CREATE TABLE enrollments (learner TEXT, course_id INTEGER);\nINSERT INTO enrollments VALUES ('Mita', 1), ('Asha', 2);\nSELECT enrollments.learner, courses.title\nFROM enrollments\nJOIN courses ON enrollments.course_id = courses.id;",
      "practice": "Add another learner to an existing course and inspect the joined rows."
    }
  ],
  "rust": [
    {
      "title": "Collections with vectors",
      "text": "A vector stores a sequence of values of the same type and can grow when it is mutable.",
      "details": [
        "vec! creates a vector. push appends an item, and a for loop can visit borrowed elements with &topics without taking ownership of the vector.",
        "After iterating over references, the vector remains available for later use. Run the complete program in a Rust compiler, then try an empty vector and discuss how its element type is determined."
      ],
      "code": "fn main() {\n    let mut topics = vec![\"Rust\", \"Git\"];\n    topics.push(\"SQL\");\n    for topic in &topics {\n        println!(\"{}\", topic);\n    }\n    println!(\"Total: {}\", topics.len());\n}",
      "practice": "Add a topic and print the total length in a Rust environment."
    },
    {
      "title": "Optional values with Option",
      "text": "Option represents a value that may be present or absent without using a null reference.",
      "details": [
        "Some(value) represents a present value and None represents its absence. match requires the program to consider both alternatives, which makes the fallback explicit.",
        "The type annotation Option<i32> says that a present value would be an integer. Switch the example between Some(7) and None in a Rust toolchain and trace which branch runs."
      ],
      "code": "fn main() {\n    let score: Option<i32> = Some(7);\n    match score {\n        Some(value) => println!(\"Score: {}\", value),\n        None => println!(\"No score yet\"),\n    }\n}",
      "practice": "Change the value to None and explain the output."
    }
  ],
  "c": [
    {
      "title": "Arrays and bounds",
      "text": "An array stores a fixed number of elements of the same type. Indexing starts at zero.",
      "details": [
        "In this example scores has three int elements at indices 0, 1 and 2. A loop visits the valid indices and prints each value.",
        "C does not automatically check every array access. Reading or writing outside the array is undefined behavior, so keep loop bounds consistent with the array length and use compiler warnings and runtime tools."
      ],
      "code": "#include <stdio.h>\nint main(void) {\n    int scores[] = {7, 8, 9};\n    size_t count = sizeof scores / sizeof scores[0];\n    for (size_t i = 0; i < count; i++) {\n        printf(\"%d\\n\", scores[i]);\n    }\n    return 0;\n}",
      "practice": "Add another score and confirm the loop still visits the valid elements."
    },
    {
      "title": "Strings as character arrays",
      "text": "In C, a string is a sequence of char values terminated by a zero byte, written as \\0.",
      "details": [
        "The compiler includes a terminating zero when initializing the array from a string literal. printf with %s reads characters until that terminator.",
        "The destination array must have enough space for both the text and its terminator. Avoid unsafe copying and never use untrusted text as a format string. Compile with warnings and test in a safe practice environment."
      ],
      "code": "#include <stdio.h>\nint main(void) {\n    char name[] = \"Mita\";\n    printf(\"Hello, %s!\\n\", name);\n    return 0;\n}",
      "practice": "Change the name and explain where the terminating zero comes from."
    }
  ],
  "cs": [
    {
      "title": "Searching a list",
      "text": "Linear search examines items one by one until it finds a target or reaches the end.",
      "details": [
        "The function returns the index of the first matching item, or -1 if the target is absent. Since the loop can inspect every item, its worst-case running time grows linearly with the list length.",
        "Test a match at the beginning, a match at the end, a missing value and an empty list. Explicit return behavior makes a function easier to use, but a caller must handle the not-found result."
      ],
      "code": "def find_index(items, target):\n    for index, item in enumerate(items):\n        if item == target:\n            return index\n    return -1\n\nprint(find_index([\"a\", \"b\", \"c\"], \"b\"))\nprint(find_index([], \"b\"))",
      "practice": "Test a missing target and a repeated target; explain which index is returned."
    },
    {
      "title": "Stack behavior",
      "text": "A stack is a last-in, first-out collection: the most recently added item is the first one removed.",
      "details": [
        "A Python list can model a small stack with append to push and pop to remove the last item. The example adds two tasks and removes the second one first.",
        "Calling pop on an empty list raises IndexError, so check whether work is available before removing it. Stacks are useful for undo histories and evaluating nested expressions, but choose a structure appropriate to your requirements."
      ],
      "code": "stack = []\nstack.append(\"first\")\nstack.append(\"second\")\nif stack:\n    print(stack.pop())\nprint(stack)",
      "practice": "Push three values, pop one and predict which values remain."
    }
  ],
  "go": [
    {
      "title": "Maps and safe lookup",
      "text": "A map associates keys with values. The two-result lookup form distinguishes a missing key from a stored zero value.",
      "details": [
        "The example creates a map from strings to integers. The expression scores[\"Mita\"] returns a value and a boolean reporting whether the key exists.",
        "A missing key returns the value type’s zero value, so checking the boolean is important when zero is meaningful. Run this complete program in a Go environment and compare present and absent names."
      ],
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    scores := map[string]int{\"Mita\": 0, \"Asha\": 8}\n    value, ok := scores[\"Mita\"]\n    fmt.Println(value, ok)\n    missing, found := scores[\"Ravi\"]\n    fmt.Println(missing, found)\n}",
      "practice": "Look up another name and explain the boolean result."
    },
    {
      "title": "Errors as values",
      "text": "Go functions commonly return an error alongside a result. The caller should check the error before relying on the result.",
      "details": [
        "strconv.Atoi converts a string to an integer and returns both the value and an error. A nil error indicates successful conversion; a non-nil error describes a failure.",
        "Try changing \"42\" to a word. The example prints a friendly message instead of using a failed conversion as if it were valid. Handle errors at the appropriate boundary and include context where useful."
      ],
      "code": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    n, err := strconv.Atoi(\"42\")\n    if err != nil {\n        fmt.Println(\"Invalid number:\", err)\n        return\n    }\n    fmt.Println(n * 2)\n}",
      "practice": "Try a word instead of 42 and describe the error path."
    }
  ],
  "git": [
    {
      "title": "Inspecting changes safely",
      "text": "Before making a commit, review what has changed and which changes are staged.",
      "details": [
        "git status summarizes the working tree. git diff shows unstaged changes, while git diff --staged shows the changes currently selected for the next commit.",
        "Use these commands in a practice repository after editing a file and again after staging it. Reviewing a diff can reveal mistakes or sensitive data, but it does not replace a security review."
      ],
      "code": "git status\ngit diff\ngit diff --staged",
      "practice": "Edit a practice file, inspect its diff, stage it and inspect the staged diff."
    },
    {
      "title": "Reading history",
      "text": "Git history can help explain what changed, when and why. Start with read-only commands before attempting to change history.",
      "details": [
        "git log --oneline summarizes commits; git show displays details for a commit. A commit hash identifies a particular object, while HEAD refers to the currently checked-out commit.",
        "Use a disposable repository and inspect a recent commit. History can include sensitive data even if a later commit removes it. Avoid destructive history operations on shared branches without a coordinated plan."
      ],
      "code": "git log --oneline\ngit show --stat HEAD\ngit show HEAD",
      "practice": "Use these commands in your practice repository and describe the latest change."
    }
  ],
  "ai": [
    {
      "title": "Classification metrics",
      "text": "Accuracy measures the proportion of predictions that are correct, but it can hide important mistakes when classes are imbalanced.",
      "details": [
        "A false positive predicts the positive class when the actual class is negative; a false negative misses an actual positive. Precision and recall focus on different aspects of these errors.",
        "This small arithmetic example is not a trained model or a statistical evaluation. Choose metrics based on real consequences, examine class distribution and evaluate on representative, held-out data."
      ],
      "code": "true_positive = 8\nfalse_positive = 2\nfalse_negative = 4\nprecision = true_positive / (true_positive + false_positive)\nrecall = true_positive / (true_positive + false_negative)\nprint(\"precision:\", precision)\nprint(\"recall:\", recall)",
      "practice": "Calculate precision and recall by hand, then consider which error is more costly in a chosen application."
    },
    {
      "title": "Evaluating generated answers",
      "text": "A generated answer should be evaluated for accuracy, relevance and safety before it is used.",
      "details": [
        "Start by stating the task and the evidence needed. Check factual claims against reliable sources, identify missing context and distinguish a cited source from evidence that actually supports the claim.",
        "For consequential decisions, involve a qualified person and protect private information. Keep examples of failures and retest after changing a prompt or model; one good-looking answer is not evidence of consistent reliability."
      ],
      "code": "Review checklist:\n1. Is the answer relevant to the question?\n2. Can important claims be independently checked?\n3. Does it expose private information?\n4. What uncertainty or missing context remains?",
      "practice": "Use the checklist on an invented answer and record one possible improvement."
    }
  ]
};
