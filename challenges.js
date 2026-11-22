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
