/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

describe("sum function", () => {

  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
  });

  const cases = [
    {
      name: "array with just one number",
      input: [5],
      expected: 5
    },
    {
      name: "array containing negative numbers",
      input: [5, -1, -13, 20],
      expected: 11  // 5 -1 -13 + 20 = 11
    },
    {
      name: "array with decimal/float numbers",
      input: [5.9, 2.78, -3.125],
      expected: 5.555  // 5.9 + 2.78 - 3.125
    },
    {
      name: "array containing non-number values",
      input: [5, -1, "k", 20],
      expected: 24 // 5 -1 + 20
    },
    {
      name: "array with only non-number values",
      input: ["a", "b", "k", "n"],
      expected: 0
    }
  ];

  cases.forEach(({ name, input, expected }) => {
    test(`Given ${name}, returns ${expected}`, () => {
      expect(sum(input)).toBe(expected);
    });
  });

});



// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
//test.todo("given an empty array, returns 0")

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
