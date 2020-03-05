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
    let maxVal = -Infinity
    function maximumBinaryHelper (Node) {
      if (!Node) {
        return
      }
      if (Node.value > maxVal) maxVal = Node.value
      if (Node.left) maximumBinaryHelper(Node.left)
      if (Node.right) maximumBinaryHelper(Node.right)
      return maxVal
    }
    maximumBinaryHelper(this.root)
    return maxVal
  }
}

module.exports = { Node, BinaryTree }
