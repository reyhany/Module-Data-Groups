/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

describe("max function", () => {
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity);
  });

      const cases = [
        {
      name: "array with one number",
      input: [2],
      expected: 2
    },
    {
      name: "array with positive and negative numbers",
      input: [-1, -5, 6, 8],
      expected: 8
    },
    {
      name: "array with only negative numbers",
      input: [-1, -5, -6, -8],
      expected: -1
    },
    {
      name: "array with decimal numbers",
      input: [3.1, 5.3, 1.9, 2.6],
      expected: 5.3
    },
    {
      name: "array with non-number values (should ignore them)",
      input: ["a", 10, "hello", 7, {}],
      expected: 10
    },
    {
      name: "array with only non-number values",
      input: ["a", "b", {}, []],
      expected: -Infinity
    }
    ]

    cases.forEach(({name, input, expected}) =>{
         test(`Given ${name}, returns ${expected}`, () => {
      expect(findMax(input)).toBe(expected);
        });
    
    
  });
});

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.

//test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
