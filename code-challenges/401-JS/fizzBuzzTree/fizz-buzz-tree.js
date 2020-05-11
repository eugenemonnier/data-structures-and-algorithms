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

function fizzBuzzTree (tree) {
  const fbTree = new BinaryTree()
  fbTree.root = fizzBuzzTreeHelper(tree.root)
  console.log(fbTree)
  return fbTree
}

function fizzify (val) {
  if (val % 15 === 0) val = 'fizzbuzz'
  else if (val % 3 === 0) val = 'fizz'
  else if (val % 5 === 0) val = 'buzz'
  else val = val.toString()
  return val
}

// help from Ada
function fizzBuzzTreeHelper (node) {
  if (node === null) return null
  const fizzVal = fizzify(node.value)
  const newNode = new Node(fizzVal)
  newNode.left = fizzBuzzTreeHelper(node.left)
  newNode.right = fizzBuzzTreeHelper(node.right)
  return newNode
}

module.exports = { Node, BinaryTree, fizzBuzzTree }
