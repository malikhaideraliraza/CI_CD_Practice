const sum = require('../helper/sum');

test('adds 1 + 2 to equal 5', () => {
  expect(sum(1, 2)).toBe(5);
});

test('adds 2 + 2 to equal 6', () => {
  expect(sum(2, 2)).toBe(6);
});

test('adds 1 + 1 to equal 4', () => {
  expect(sum(1, 1)).toBe(4);
});
