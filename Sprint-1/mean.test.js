const mean = require("./mean");

describe("mean function", () => {
    
    test("calculates mean of positive numbers", () => {
        expect(mean([1, 2, 3])).toBe(2);
    });
});

