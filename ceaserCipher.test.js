const ceaserCipher = require('./ceaserCipher');

test('Ceaser Cipher no spaces', () => {
  expect(ceaserCipher('abcdefghijklmnopqrstuvwxyz', 1)).toMatch('bcdefghijklmnopqrstuvwxyza');
});

test('Ceaser Cipher no spaces, same case', () => {
  expect(ceaserCipher('abCdE', 1)).toMatch('bcDeF');
});

test('Ceaser Cipher capital Z test', () => {
  expect(ceaserCipher('Z', 1)).toMatch('A');
});

test('Ceaser Cipher capital Z test, 3 interval', () => {
  expect(ceaserCipher('Z', 3)).toMatch('C');
});

test('Ceaser Cipher undercase Z test', () => {
  expect(ceaserCipher('z', 1)).toMatch('a');
});

test('Ceaser Cipher undercase Z test, 3 interval', () => {
  expect(ceaserCipher('z', 3)).toMatch('c');
});

test('Ceaser Cipher including spaces', () => {
  expect(ceaserCipher('defend the east wall of the castle', 1)).toMatch('efgfoe uif fbtu xbmm pg uif dbtumf');
});
