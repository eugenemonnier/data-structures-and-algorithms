class Node {
  constructor (root) {
    this.root = root
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor () {
    this.root = null
  }

  preOrder () {
    const output = []
    const traverse = (Node) => {
      if (!Node) {
        return
      }
      output.push(Node.root)
      if (Node.left) {
        traverse(Node.left)
      }
      if (Node.right) {
        traverse(Node.right)
      }
    }
    traverse(this.root)
    return output
  }

  inOrder () {
    const output = []
    const traverse = (Node) => {
      if (!Node) {
        return
      }
      if (Node.left) {
        traverse(Node.left)
      }
      output.push(Node.root)
      if (Node.right) {
        traverse(Node.right)
      }
    }
    traverse(this.root)
    return output
  }

  postOrder () {
    const output = []
    const traverse = (Node) => {
      if (!Node) {
        return
      }
      if (Node.left) {
        traverse(Node.left)
      }
      if (Node.right) {
        traverse(Node.right)
      }
      output.push(Node.root)
    }
    traverse(this.root)
    return output
  }
}

module.exports = { Node, BinaryTree }

const testTree = new BinaryTree()
testTree.root = new Node(10)
testTree.root.left = new Node(9)
testTree.root.left.left = new Node(8)
testTree.root.left.right = new Node(3)
testTree.root.right = new Node(5)
testTree.root.right.left = new Node(4)
testTree.root.right.left.left = new Node(2)

// console.log(testTree)

console.log(testTree.preOrder())
console.log(testTree.inOrder())
console.log(testTree.postOrder())
