// Starter guides and short supporting summaries. Main lesson content stays in English.
const lessonExtras = {
  python: [
    {
      summaries: {
        en: 'Python is a readable programming language. Use print() to display a message when the program runs.',
        bn: 'Python সহজে পড়া যায় এমন একটি প্রোগ্রামিং ভাষা। প্রোগ্রাম চালালে বার্তা দেখাতে print() ব্যবহার করুন।',
        hi: 'Python पढ़ने में आसान प्रोग्रामिंग भाषा है। प्रोग्राम चलने पर संदेश दिखाने के लिए print() का उपयोग करें।'
      },
      steps: ['Read the two print calls and predict the two lines of output.', 'Run the example in the practice studio and compare its output with your prediction.', 'Replace the second message with a greeting containing your name, then run it again.'],
      tip: 'Keep the quotation marks paired. Text inside the quotes is a string, not a command.',
      check: {question:'What does print("Hello") do?', options:['Displays Hello in the output', 'Stores Hello in a file', 'Creates a new Python function'], answer:0, explanation:'print() writes the supplied value to the output; it does not create a file or function.'}
    },
    {
      summaries: {
        en: 'Variables give values names. Strings contain text, integers contain whole numbers, and f-strings insert values into text.',
        bn: 'ভেরিয়েবল দিয়ে মানের নাম রাখা যায়। স্ট্রিংয়ে লেখা, পূর্ণসংখ্যায় গোটা সংখ্যা থাকে; f-string দিয়ে লেখার মধ্যে মান বসানো যায়।',
        hi: 'वेरिएबल मानों को नाम देते हैं। स्ट्रिंग में पाठ और पूर्णांक में पूरी संख्या होती है; f-string से मान पाठ में जोड़े जा सकते हैं।'
      },
      steps: ['Identify the string assigned to name and the integer assigned to age.', 'Predict the output of the f-string before running it.', 'Change both values and run the program again.'],
      tip: 'Use quotes for text. In an f-string, put the variable name inside braces and place f before the opening quote.',
      check: {question:'Which value is a string?', options:['18', '"18"', '18 + 2'], answer:1, explanation:'"18" is text because it is in quotes. The other two expressions produce numbers.'}
    },
    {
      summaries: {
        en: 'A for loop repeats work, while if runs a block only when its condition is true. Indentation defines the blocks.',
        bn: 'for লুপ কাজ পুনরাবৃত্তি করে; শর্ত সত্য হলে if-এর ব্লক চলে। ইন্ডেন্টেশন দিয়ে ব্লক নির্ধারণ করা হয়।',
        hi: 'for लूप काम दोहराता है और if का भाग केवल शर्त सही होने पर चलता है। इंडेंटेशन से ब्लॉक तय होते हैं।'
      },
      steps: ['List the values produced by range(1, 4): 1, 2 and 3.', 'For each value, decide whether number > 1 is true.', 'Run the program and explain why it prints 2 and 3, not 1.'],
      tip: 'The end value in range(1, 4) is excluded. Keep the indented lines aligned within their blocks.',
      check: {question:'What values does range(1, 4) produce?', options:['1, 2, 3 and 4', '1, 2 and 3', '0, 1, 2 and 3'], answer:1, explanation:'range starts at 1 and stops before 4, so it produces 1, 2 and 3.'}
    },
    {
      summaries: {
        en: 'A function groups reusable steps. Parameters receive inputs, and return sends a result back to the caller.',
        bn: 'ফাংশন পুনরায় ব্যবহারযোগ্য কাজ একসঙ্গে রাখে। প্যারামিটার ইনপুট নেয় এবং return ফলাফল ফেরত দেয়।',
        hi: 'फ़ंक्शन दोबारा उपयोग होने वाले चरणों को साथ रखता है। पैरामीटर इनपुट लेते हैं और return परिणाम वापस देता है।'
      },
      steps: ['Find the parameter number in the function definition.', 'Trace square(5): substitute 5 for number and calculate 5 * 5.', 'Change the argument, rerun the example and compare the returned value.'],
      tip: 'return sends a value back; print displays a value. A function can return a result without printing it.',
      check: {question:'What does square(5) return in the example?', options:['10', '25', 'The text "square"'], answer:1, explanation:'The function multiplies its input by itself, so 5 * 5 returns 25.'}
    },
    {
      summaries: {
        en: 'try runs code that may fail. An except ValueError block handles an invalid integer conversion without stopping the example.',
        bn: 'try ব্লকে ব্যর্থ হতে পারে এমন কোড চলে। except ValueError ভুল পূর্ণসংখ্যা রূপান্তরের ত্রুটি সামলায়।',
        hi: 'try में वह कोड चलता है जो असफल हो सकता है। except ValueError गलत पूर्णांक परिवर्तन की त्रुटि संभालता है।'
      },
      steps: ['Run the example with "42" and observe the result 84.', 'Change "42" to "hello" and rerun it.', 'Compare the two outputs and identify which block handled the invalid input.'],
      tip: 'Catch errors you expect. Avoid hiding unrelated errors, which can make bugs harder to find.',
      check: {question:'What happens when int("hello") runs in this example?', options:['The except ValueError block displays a message', 'It returns zero', 'It silently changes the word into a number'], answer:0, explanation:'int("hello") raises ValueError, so the matching except block runs and displays the message.'}
    }
  ],
  javascript: [
    {
      summaries: {
        en: 'JavaScript can make web pages interactive. const creates a binding that cannot be reassigned; console.log displays a value.',
        bn: 'JavaScript ওয়েবপেজে ইন্টারঅ্যাকশন যোগ করতে পারে। const দিয়ে তৈরি বাইন্ডিংয়ে নতুন মান বরাদ্দ করা যায় না; console.log মান দেখায়।',
        hi: 'JavaScript वेब पेज में इंटरैक्शन जोड़ सकता है। const से बने बाइंडिंग को नया मान नहीं दिया जा सकता; console.log मान दिखाता है।'
      },
      steps: ['Identify the string assigned to greeting.', 'Predict the console output, then run the example in the practice studio.', 'Change the string to include your name and run it again.'],
      tip: 'const prevents reassignment of the binding. It does not make every object value deeply immutable.',
      check: {question:'What does console.log(greeting) do here?', options:['Displays the greeting in the output', 'Adds a button to the page', 'Changes the value of greeting'], answer:0, explanation:'console.log displays the value; this line does not add a button or reassign greeting.'}
    },
    {
      summaries: {
        en: 'A function groups reusable behavior. An if statement chooses a return value based on the input.',
        bn: 'ফাংশন পুনরায় ব্যবহারযোগ্য কাজ একসঙ্গে রাখে। if বিবৃতি ইনপুট অনুযায়ী কোন মান ফেরত যাবে তা বেছে নেয়।',
        hi: 'फ़ंक्शन दोबारा उपयोग होने वाला काम एक साथ रखता है। if कथन इनपुट के आधार पर लौटाया जाने वाला मान चुनता है।'
      },
      steps: ['Find the name parameter and trace the call greet("Mita").', 'Predict the displayed greeting and run the example.', 'Try greet("") to see the fallback message for an empty string.'],
      tip: 'return sends a value to the caller; console.log displays the result. An empty string is falsy in JavaScript.',
      check: {question:'What does greet("") return in this example?', options:['Hello, learner!', 'Hello, Mita!', 'An empty string'], answer:0, explanation:'An empty string is falsy, so the first return is skipped and the fallback is returned.'}
    },
    {
      summaries: {
        en: 'The DOM represents page elements. An event listener can change an element when a button is clicked.',
        bn: 'DOM পেজের উপাদানগুলিকে উপস্থাপন করে। বাটনে ক্লিক করলে ইভেন্ট লিসেনার কোনো উপাদান পরিবর্তন করতে পারে।',
        hi: 'DOM पेज के तत्वों को दर्शाता है। बटन क्लिक होने पर इवेंट लिसनर किसी तत्व को बदल सकता है।'
      },
      steps: ['Find the button and the empty paragraph using their IDs.', 'Run the example in the sandboxed preview and click the button inside the preview.', 'Change the message text, run again and click the new preview button.'],
      tip: 'Use textContent for plain text. The sandbox does not allow modal alerts, so this example updates the page instead.',
      check: {question:'When does the listener update the message?', options:['When the button is clicked', 'As soon as the function is defined', 'Only after the page is closed'], answer:0, explanation:'The callback runs in response to the button click and sets the paragraph text.'}
    }
  ],
  web: [
    {
      summaries: {
        en: 'HTML elements structure page content. Headings and paragraphs describe the meaning of text.',
        bn: 'HTML উপাদান দিয়ে পেজের বিষয়বস্তু সাজানো হয়। শিরোনাম ও অনুচ্ছেদ লেখার অর্থবহ কাঠামো দেয়।',
        hi: 'HTML तत्व पेज की सामग्री को संरचना देते हैं। शीर्षक और अनुच्छेद पाठ को अर्थपूर्ण रूप देते हैं।'
      },
      steps: ['Find the html, body, heading and paragraph elements.', 'Run the preview and compare the visible heading and paragraph with the code.', 'Change the heading and paragraph to introduce yourself, then preview again.'],
      tip: 'Use headings in a meaningful order and set the page language with the lang attribute.',
      check: {question:'Which element represents the main heading in this example?', options:['h1', 'p', 'body'], answer:0, explanation:'The h1 element is the page heading; p is a paragraph and body contains page content.'}
    },
    {
      summaries: {
        en: 'CSS selectors choose elements, while declarations set properties such as color and spacing.',
        bn: 'CSS সিলেক্টর উপাদান বেছে নেয় এবং ডিক্লারেশন রং ও ফাঁকের মতো বৈশিষ্ট্য নির্ধারণ করে।',
        hi: 'CSS सिलेक्टर तत्व चुनते हैं और डिक्लेरेशन रंग तथा दूरी जैसे गुण तय करते हैं।'
      },
      steps: ['Locate the h1 selector and its color declaration.', 'Run the preview to see the sample heading and paragraph styled by the rules.', 'Change the heading color and paragraph padding, then run the preview again.'],
      tip: 'A CSS declaration has a property and a value separated by a colon. Check that text remains readable against its background.',
      check: {question:'Which CSS property changes text color?', options:['color', 'padding', 'display'], answer:0, explanation:'color controls text color; padding controls space inside the element.'}
    },
    {
      summaries: {
        en: 'Flexbox lays out items, and a media query can change the layout at a chosen screen width.',
        bn: 'Flexbox দিয়ে উপাদানের বিন্যাস করা যায়; নির্দিষ্ট স্ক্রিন প্রস্থে media query সেই বিন্যাস বদলাতে পারে।',
        hi: 'Flexbox तत्वों का लेआउट बनाता है; media query चुनी हुई स्क्रीन चौड़ाई पर लेआउट बदल सकती है।'
      },
      steps: ['Read the .row rule and the media query for screens at most 600 pixels wide.', 'Add a div with class row and two child elements to the sample body in the editor.', 'Run the preview and resize its width to compare the row and column layouts.'],
      tip: 'The example defines styles but does not contain a .row element until you add one. The query uses the preview viewport width.',
      check: {question:'What direction is set at widths of 600 pixels or less?', options:['column', 'row', 'No flex layout'], answer:0, explanation:'The media query sets flex-direction to column when its width condition matches.'}
    }
  ],
  sql: [
    {
      summaries: {
        en: 'A table stores rows of data. A primary key identifies a row, and INSERT adds a row.',
        bn: 'টেবিলে ডেটার সারি রাখা হয়। প্রাইমারি কি একটি সারিকে শনাক্ত করে এবং INSERT নতুন সারি যোগ করে।',
        hi: 'तालिका में डेटा की पंक्तियाँ होती हैं। प्राइमरी की पंक्ति की पहचान करती है और INSERT नई पंक्ति जोड़ता है।'
      },
      steps: ['Identify the id and title columns in CREATE TABLE.', 'Run the example to create the table and insert one course.', 'Add a second INSERT with a different id, followed by SELECT * FROM courses to inspect the rows.'],
      tip: 'Each studio run uses a new in-memory database. Include the setup and your queries in the same run.',
      check: {question:'What does the INSERT statement do?', options:['Adds a row', 'Deletes the table', 'Renames a column'], answer:0, explanation:'INSERT adds a row to the courses table.'}
    },
    {
      summaries: {
        en: 'SELECT reads columns, WHERE filters rows and ORDER BY sorts the results.',
        bn: 'SELECT কলাম পড়ে, WHERE সারি ফিল্টার করে এবং ORDER BY ফলাফল সাজায়।',
        hi: 'SELECT कॉलम पढ़ता है, WHERE पंक्तियाँ फ़िल्टर करता है और ORDER BY परिणाम क्रमबद्ध करता है।'
      },
      steps: ['Read which columns are selected and the condition id > 0.', 'Run the query: the studio supplies sample courses for this lesson.', 'Change the condition to id = 1 and observe which sample row remains.'],
      tip: 'In a separate SQLite environment, create and populate the courses table before running this query.',
      check: {question:'Which clause filters rows?', options:['WHERE', 'ORDER BY', 'SELECT'], answer:0, explanation:'WHERE filters rows; ORDER BY sorts results.'}
    },
    {
      summaries: {
        en: 'UPDATE changes rows. A WHERE clause limits which rows are changed; SELECT can check the result.',
        bn: 'UPDATE সারির মান বদলায়। WHERE দিয়ে কোন সারি বদলাবে তা সীমিত করা যায় এবং SELECT দিয়ে ফলাফল দেখা যায়।',
        hi: 'UPDATE पंक्तियाँ बदलता है। WHERE तय करता है किन पंक्तियों को बदलना है और SELECT परिणाम जाँच सकता है।'
      },
      steps: ['Identify the new title and the WHERE condition targeting id 1.', 'Run the example and inspect the selected row in the output.', 'Change the query to update id 2, then select id 2 to confirm the change.'],
      tip: 'Without WHERE, UPDATE affects every row. Each studio run starts fresh with sample rows for this lesson.',
      check: {question:'What can happen if UPDATE has no WHERE clause?', options:['Every row can be updated', 'Only the first row changes', 'The table is automatically backed up'], answer:0, explanation:'Without a WHERE filter, the update applies to all rows in the table.'}
    }
  ]
};
