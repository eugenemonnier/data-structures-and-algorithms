const { Node, BinaryTree } = require('../Data-Structures/tree/tree')

function treeIntersection (treeA, treeB) {
  const treeArr = treeA.preOrder()
  const outputArr = treeB.matchTree(treeArr)
  if (outputArr < 1) outputArr.push('No matches found.')
  return outputArr
}

const treeA = new BinaryTree()
treeA.root = new Node(-10)
treeA.root.left = new Node(-13)
treeA.root.left.left = new Node(-5)
treeA.root.left.left.left = new Node(-20)
treeA.root.left.left.right = new Node(-11)
treeA.root.left.right = new Node(-6)
treeA.root.left.right.left = new Node(-8)
treeA.root.right = new Node(-30)
treeA.root.right.left = new Node(-95)
treeA.root.right.right = new Node(-1)

const treeB = new BinaryTree()
treeB.root = new Node(8)
treeB.root.left = new Node(13)
treeB.root.left.left = new Node(12)
treeB.root.left.right = new Node(30)
treeB.root.right = new Node(5)
treeB.root.right.left = new Node(50)
treeB.root.right.right = new Node(0)
treeB.root.right.left.left = new Node(11)

// console.log(treeIntersection(treeA, treeB))

module.exports = treeIntersection
