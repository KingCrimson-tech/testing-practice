const calculator = require("./calculator");

test("1 plus 2 is 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("2 minus 1 is 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
test("4 divided by 2 is 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
test("2 multiplied by 2 is 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
