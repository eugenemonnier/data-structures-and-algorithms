const functions = require('./../array-binary-search');
const BinarySearch = functions.BinarySearch;
const generateArray = functions.generateArray;

// from jest documentation
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

describe('BinarySearch module', () => {
  test('Happy path', () => {
    expect(BinarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
    expect(BinarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
  test('Expected failure, invalid input', () => {
    expect(() => {BinarySearch();}).toThrowError(TypeError);
  });
  test('Edge case: empty array or no key', () => {
    expect(BinarySearch([], 5)).toStrictEqual(-1);
    expect(BinarySearch([])).toStrictEqual(-1);
  })
  test('generateArray() generates an array with a lenth of the given input & a key with a value between 0 & 100', () => {
    let values = generateArray(1000);
    expect(values[0].length).toStrictEqual(1000);
    expect(values[1]).toBeWithinRange(0,100);
  })
})