const insertShiftArray = require('./../array-shift.js')

describe('Shift-Array module', () => {
  it('Happy path', () => {
    expect(insertShiftArray([2, 3, 5, 6], 4)).toStrictEqual([2, 3, 4, 5, 6])
  })
  test('Expected failure, invalid input', () => {
    expect(() => { insertShiftArray() }).toThrowError(TypeError)
  })
  it('Edge case: Empty array', () => {
    expect(insertShiftArray([], 5)).toStrictEqual([5])
  })
})
