// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const inverted = {};
  for (const key in obj) {
    const value = obj[key];
    if (inverted[value] !== undefined) {
      throw new Error("Duplicate values cannot be inverted to keys");
    }
    inverted[value] = key;
  }
  return inverted;
}

module.exports = invert;


// a) What is the current return value when invert is called with { a : 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// c) What does Object.entries return? Why is it needed in this program?

// d) Explain why the current return value is different from the target output

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
