const { quickSort } = require('../quickSort')

describe('quickSort module: ', () => {
  test('should sort interger array from highest to lowest', () => {
    expect(quickSort([8, 4, 23, 42, 16, 15])).toStrictEqual([4, 8, 15, 16, 23, 42])
    expect(quickSort([20, 18, 12, 8, 5, -2])).toStrictEqual([-2, 5, 8, 12, 18, 20])
    expect(quickSort([2, 3, 5, 7, 13, 11])).toStrictEqual([2, 3, 5, 7, 11, 13])
    expect(quickSort([5, 12, 7, 5, 5, 7])).toStrictEqual([5, 5, 5, 7, 7, 12])
  })
  test('should return an empty array', () => {
    expect(quickSort([])).toStrictEqual([])
  })
})