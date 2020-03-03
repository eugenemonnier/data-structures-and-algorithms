const { BinaryTree, fizzBuzzTree } = require('../fizz-buzz-tree')

describe('fizz-buzz-tree module ', () => {
  test('fizzBuzzTree(tree) creates a binary tree with correct values', () => {
    const testTree = new BinaryTree()
    let fbTree = fizzBuzzTree(testTree)
    console.log(fbTree)
    testTree.insert(10)
    testTree.insert(6)
    testTree.insert(5)
    testTree.insert(1)
    testTree.insert(3)
    testTree.insert(2)
    testTree.insert(15)
    testTree.insert(12)
    fbTree = fizzBuzzTree(testTree)
    expect(fbTree.preOrder()).toEqual(['buzz', 'fizz', 'buzz', '1', 'fizz', '2', 'fizzbuzz', 'fizz'])
  })
})
