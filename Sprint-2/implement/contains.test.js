const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
describe('When passed an object and a property name', () => {
    test('Then it should return true if the object contains the property', () => {
      const obj = { a:1, b:2};
      expect(contains(obj, 'a')).toBe(true);
    });

     test('Then it should return false if the object not contains the property', () => {
      const obj = { a:1, b:2};
      expect(contains(obj, 'c')).toBe(false);
    });
});
// Given an empty object
// When passed to contains
// Then it should return false
describe('Given an empty object', () => {
    test('Then it should return false for contains', () => {
        const emptyObj = {};
        expect(contains(emptyObj, 'key')).toBe(false);
    });
});
test.todo("contains on empty object returns false");

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
describe('Given an object with properties', () => {
    test('it should return true when passed to contains with an existing property name', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(contains(obj, 'b')).toBe(true);
    });
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
describe('Given an object with properties', () => {
    test('it should return false when passed to contains with an non-existing property name', () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(contains(obj, 'e')).toBe(false)
    });
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
describe('Given invalid parameters like an array', () => {
    test('it should return false or throw an error when passed to contains', () => {
        const obj = ['a', 'b', 'c', 1, 2, 3]
        expect(contains(obj, 'a')).toBe(false)
    });
});
