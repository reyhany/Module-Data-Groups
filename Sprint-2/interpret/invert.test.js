
const invert = require("./invert");

test("inverts a simple object", () => {
  expect(invert({ a: "1", b: "2" })).toEqual({ 1: "a", 2: "b" });
});

test("inverts numeric values", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("throws error on duplicate values", () => {
  expect(() => invert({ a: "1", b: "1" })).toThrow(
    "Duplicate values cannot be inverted to keys"
  );
});

test("inverts empty object to empty object", () => {
  expect(invert({})).toEqual({});
});
