const calculator = require('./calculator');

const { add, subtract } = calculator;

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
