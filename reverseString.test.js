const reverseString = require('./reverseString');

test('Uncapitalized string should be reversed in same case', () => {
  expect(reverseString('testing123')).toMatch('321gnitset');
});

test('Capitalized string should be reversed in same case', () => {
  expect(reverseString('TEST2')).toMatch('2TSET');
});

test('Spaces should also be reverse', () => {
  expect(reverseString('Test with some spaces')).toMatch('secaps emos htiw tseT');
});
