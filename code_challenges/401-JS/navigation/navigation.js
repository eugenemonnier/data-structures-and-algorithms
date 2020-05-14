const linkedList = require('../Data-Structures/linkedList/linked-list.test')

class Navigation extends linkedList {
  back (node) {
    return node.prev
  }

  forward (node) {
    return node.next
  }

  link (newNode, currNode) {
    newNode.next = currNode.next
    newNode.prev = currNode
    currNode.next.prev = newNode
    currNode.next = newNode
  }
}

module.exports = Navigation
