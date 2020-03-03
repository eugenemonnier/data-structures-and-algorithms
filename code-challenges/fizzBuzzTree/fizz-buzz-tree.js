class Node {
  constructor (value) {
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

  // from Cait, for constructing BinaryTree
  insert (value) {
    const newNode = new Node(value)
    if (this.root === null) {
      return this.root = newNode
    }
    var current = this.root
    while (true) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (current.left === null) {
          return current.left = newNode
        }
        current = current.left
      } else {
        if (current.right === null) {
          return current.right = newNode
        }
        current = current.right
      }
    }
  }
}

function traverse (Node) {
  if (!Node) {
    return null
  } else if (Node.value % 15 === 0) {
    Node.value = 'fizzbuzz'
  } else if (Node.value % 3 === 0) {
    Node.value = 'fizz'
  } else if (Node.value % 5 === 0) {
    Node.value = 'buzz'
  } else {
    Node.value = Node.value.toString()
  }
  traverse(Node.left)
  traverse(Node.right)
}

function fizzBuzzTree (tree) {
  traverse(tree.root)
  return tree
}
module.exports = { Node, BinaryTree, fizzBuzzTree }
