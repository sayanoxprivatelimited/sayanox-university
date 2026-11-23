// Public examples and checks are for practice only, not secure assessment.
const codeChallenges = {
  python: [
    {title:'Double a number', prompt:'Write double(number) to return twice the input.', starter:'def double(number):\n    # Return twice the number\n    pass', tests:'\nassert double(2) == 4, "double(2) should be 4"\nassert double(0) == 0, "double(0) should be 0"\nassert double(-3) == -6, "double(-3) should be -6"\nprint("All 3 practice checks passed!")'},
    {title:'Sum a list', prompt:'Write total(numbers) to return the sum of all numbers, including an empty list.', starter:'def total(numbers):\n    # Return the sum\n    pass', tests:'\nassert total([1, 2, 3]) == 6, "Expected 6"\nassert total([]) == 0, "An empty list should total 0"\nassert total([-2, 2]) == 0, "Expected 0"\nprint("All 3 practice checks passed!")'}
  ],
  javascript: [
    {title:'Double a number', prompt:'Write double(number) to return twice the input.', starter:'function double(number) {\n  // Return twice the number\n}', tests:'\nif (double(2) !== 4) throw Error("double(2) should be 4");\nif (double(0) !== 0) throw Error("double(0) should be 0");\nif (double(-3) !== -6) throw Error("double(-3) should be -6");\nconsole.log("All 3 practice checks passed!");'},
    {title:'Sum an array', prompt:'Write total(numbers) to return the sum of all numbers, including an empty array.', starter:'function total(numbers) {\n  // Return the sum\n}', tests:'\nif (total([1,2,3]) !== 6) throw Error("Expected 6");\nif (total([]) !== 0) throw Error("An empty array should total 0");\nif (total([-2,2]) !== 0) throw Error("Expected 0");\nconsole.log("All 3 practice checks passed!");'}
  ]
};
// Hints and example solutions are public learning aids, not hidden grading data.
codeChallenges.python[0].hints = ['A function returns a value with return.', 'Multiply the input by 2.'];
codeChallenges.python[0].solution = 'def double(number):\n    return number * 2';
codeChallenges.python[1].hints = ['Start with a total of zero.', 'Loop through the list and add each value to the total.'];
codeChallenges.python[1].solution = 'def total(numbers):\n    result = 0\n    for number in numbers:\n        result += number\n    return result';
codeChallenges.javascript[0].hints = ['Use return to send a value back.', 'Multiply the input by 2.'];
codeChallenges.javascript[0].solution = 'function double(number) {\n  return number * 2;\n}';
codeChallenges.javascript[1].hints = ['Start with a total of zero.', 'Use a for...of loop to add each number.'];
codeChallenges.javascript[1].solution = 'function total(numbers) {\n  let result = 0;\n  for (const number of numbers) result += number;\n  return result;\n}';
