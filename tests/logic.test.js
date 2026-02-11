const { add, isEven } = require("../src/logic");

describe("logic.js", () => {
  test("add should return sum", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-2, 2)).toBe(0);
  });

  test("isEven should detect even numbers", () => {
    expect(isEven(10)).toBe(true);
    expect(isEven(7)).toBe(false);
  });
});
