const { Node, BinaryTree } = require('../tree.js')

describe('BinaryTree module:', () => {
  describe('constructor()', () => {
    test('Creates an instance of a BinaryTree', () => {
      const testTree = new BinaryTree()
      expect(testTree).toEqual({ root: null })
    })
    test('Creates an instance of a BinaryTree and add a node', () => {
      const testTree = new BinaryTree()
      testTree.root = new Node(10)
      expect(testTree).toEqual({ root: expect.objectContaining({ value: 10, left: null, right: null }) })
    })
  })
  describe('preOrder()', () => {
    test('Return an array containing tree elements in a preorder traversal', () => {
      const testTree = new BinaryTree()
      testTree.root = new Node(10)
      testTree.root.left = new Node(9)
      testTree.root.left.left = new Node(8)
      testTree.root.left.right = new Node(3)
      testTree.root.right = new Node(5)
      testTree.root.right.left = new Node(4)
      testTree.root.right.left.left = new Node(2)
      expect(testTree.preOrder()).toStrictEqual([10, 9, 8, 3, 5, 4, 2])
    })
  })
  describe('inOrder()', () => {
    test('Return an array containing tree elements in a inOrder traversal', () => {
      const testTree = new BinaryTree()
      testTree.root = new Node(10)
      testTree.root.left = new Node(9)
      testTree.root.left.left = new Node(8)
      testTree.root.left.right = new Node(3)
      testTree.root.right = new Node(5)
      testTree.root.right.left = new Node(4)
      testTree.root.right.left.left = new Node(2)
      expect(testTree.inOrder()).toStrictEqual([8, 9, 3, 10, 2, 4, 5])
    })
  })
  describe('postOrder()', () => {
    test('Return an array containing tree elements in a postOrder traversal', () => {
      const testTree = new BinaryTree()
      testTree.root = new Node(10)
      testTree.root.left = new Node(9)
      testTree.root.left.left = new Node(8)
      testTree.root.left.right = new Node(3)
      testTree.root.right = new Node(5)
      testTree.root.right.left = new Node(4)
      testTree.root.right.left.left = new Node(2)
      expect(testTree.postOrder()).toStrictEqual([8, 3, 9, 2, 4, 5, 10])
    })
  })

  describe('breadthOrder()', () => {
    test('Return an array containing tree elements in a breadthOrder traversal', () => {
      const testTree = new BinaryTree()
      testTree.root = new Node(10)
      testTree.root.left = new Node(9)
      testTree.root.left.left = new Node(8)
      testTree.root.left.right = new Node(3)
      testTree.root.right = new Node(5)
      testTree.root.right.left = new Node(4)
      testTree.root.right.left.left = new Node(2)
      expect(testTree.breadthOrder()).toStrictEqual([10, 9, 5, 8, 3, 4, 2])
    })
  })

  describe('maximumBinary()', () => {
    test('Return the highest value in the tree', () => {
      const testTree = new BinaryTree()
      testTree.root = new Node(7)
      testTree.root.left = new Node(-9)
      testTree.root.left.left = new Node(8)
      testTree.root.left.right = new Node(3)
      testTree.root.right = new Node(5)
      testTree.root.right.left = new Node(4)
      testTree.root.right.left.left = new Node(2)
      expect(testTree.maximumBinary()).toStrictEqual(8)
    })
  })
})
