const selectionSort = require('../selectionSort')

describe('selectionSort module: ', () => {
  test('should sort interger array from highest to lowest', () => {
    expect(selectionSort([8, 4, 23, 42, 16, 15])).toStrictEqual([4, 8, 15, 16, 23, 42])
    expect(selectionSort([20, 18, 12, 8, 5, -2])).toStrictEqual([-2, 5, 8, 12, 18, 20])
    expect(selectionSort([5, 12, 7, 5, 5, 7])).toStrictEqual([5, 5, 5, 7, 7, 12])
    expect(selectionSort([2, 3, 5, 7, 13, 11])).toStrictEqual([2, 3, 5, 7, 11, 13])
  })
  test('should return an empty array', () => {
    expect(selectionSort([])).toStrictEqual([])
  })
})
