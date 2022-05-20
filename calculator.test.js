const calculator = require('./calculator');

const {
  add, subtract, multiply, divide,
} = calculator;

test('Add two numbers together', () => {
  expect(add(5, 10)).toBe(15);
});

test('Add two non-valid numbers', () => {
  expect(add('ten', 'five')).toBeFalsy();
});

test('Subtract two positive numbers together to get a positive result', () => {
  expect(subtract(10, 5)).toBe(5);
});

test('Subtract two positive numbers together to get a negative result', () => {
  expect(subtract(5, 10)).toBe(-5);
});

test('Subtract two negative numbers together to get a positive result', () => {
  expect(subtract(-5, -10)).toBe(5);
});

test('Subtract two string numbers', () => {
  expect(subtract('3', '5')).toBe(-2);
});

test('Subtract two non-valid numbers', () => {
  expect(subtract('ten', 'five')).toBeFalsy();
});

test('Multiply two numbers together', () => {
  expect(multiply(5, 10)).toBe(50);
});

test('Multiply a negative with a positive', () => {
  expect(multiply(-5, 10)).toBe(-50);
});

test('Subtract two non-valid numbers', () => {
  expect(multiply('ten', 'five')).toBeFalsy();
});

test('Divide two numbers together', () => {
  expect(divide(10, 5)).toBe(2);
});

test('Divide a negative with a positive', () => {
  expect(divide(-10, 5)).toBe(-2);
});

test('Divide involving decimals', () => {
  expect(divide(5, 2)).toBe(2.5);
});

test('Subtract two non-valid numbers', () => {
  expect(divide('ten', 'five')).toBeFalsy();
});
