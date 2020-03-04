class Node {
  constructor (value = null) {
    this.value = value
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
      output.push(Node.value)
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
      output.push(Node.value)
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
      output.push(Node.value)
    }
    traverse(this.root)
    return output
  }

  breadthOrder () {
    const output = []
    const queue = []
    if (!this.root) {
      return
    }
    queue.push(this.root)
    while (queue.length > 0) {
      const current = queue[0]
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
      output.push(queue[0].value)
      queue.shift()
    }
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

console.log('preorder ', testTree.preOrder())
console.log('inorder ', testTree.inOrder())
console.log('postorder ', testTree.postOrder())
console.log('breadth ', testTree.breadthOrder())
