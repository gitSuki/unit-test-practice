const capitalize = require('./capitalize');

test('Fist character of uncapitalized string should now be capitalized', () => {
  expect(capitalize('uncapital string')).toMatch('Uncapital string');
});

test('Fist character of capitalized string should stay capitalized', () => {
  expect(capitalize('Capital string')).toMatch('Capital string');
});
