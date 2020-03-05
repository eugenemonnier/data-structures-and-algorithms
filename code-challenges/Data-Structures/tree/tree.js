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
    if (!this.root) return output
    else queue.push(this.root)
    while (queue.length > 0) {
      const current = queue[0]
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
      output.push(queue[0].value)
      queue.shift()
    }
    return output
  }

  reverseLevelOrder () {
    const output = []
    const queue = []
    if (!this.root) return output
    else queue.push(this.root)
    while (queue.length > 0) {
      const current = queue.shift()
      if (current.right) queue.push(current.right)
      if (current.left) queue.push(current.left)
      output.unshift(current.value)
    }
    return output
  }

  maximumBinary () {
    let output = -Infinity
    const traverse = (Node) => {
      if (!Node) {
        return
      }
      if (Node.value > output) output = Node.value
      if (Node.left) traverse(Node.left)
      if (Node.right) traverse(Node.right)
    }
    traverse(this.root)
    return output
  }
}

module.exports = { Node, BinaryTree }

const testTree = new BinaryTree()
console.log('maximumBinary', testTree.maximumBinary())

testTree.root = new Node(10)
testTree.root.left = new Node(9)
testTree.root.left.left = new Node(8)
testTree.root.left.right = new Node(3)
testTree.root.right = new Node(5)
testTree.root.right.left = new Node(4)
testTree.root.right.left.left = new Node(2)

const testTree2 = new BinaryTree()
console.log('reverseLevelOrder empty ', testTree2.reverseLevelOrder())

testTree2.root = new Node(1)
testTree2.root.left = new Node(2)
testTree2.root.left.left = new Node(4)
testTree2.root.left.right = new Node(5)
testTree2.root.right = new Node(3)
testTree2.root.right.left = new Node(6)
testTree2.root.right.right = new Node(7)

// console.log('preorder ', testTree.preOrder())
// console.log('inorder ', testTree.inOrder())
// console.log('postorder ', testTree.postOrder())
// console.log('breadth ', testTree.breadthOrder())
console.log('reverseLevelOrder ', testTree2.reverseLevelOrder())
console.log('reverseLevelOrder ', testTree.reverseLevelOrder())
console.log('maximumBinary', testTree.maximumBinary())
console.log('maximumBinary', testTree2.maximumBinary())