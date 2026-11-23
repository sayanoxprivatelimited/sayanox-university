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
  ]
};
