class Node {
  constructor (value = null) {
    this.value = value
    this.next = null
  }
} 

class Stack {
  constructor () {
    this.top = null
  }

  peek() {
    return this.top.value
  }

  push(value) {
    let newNode = new Node(value)
    newNode.next = this.top
    this.top = newNode
    return this.top
  }

  pop() {
    if (!this.top) {
      return undefined
    } else if (!this.top.next) {
      this.top = null
      return this.top
    } else {
      this.top.value = this.top.next.value
      this.top.next = this.top.next.next
      return this.top.value
    }
  }

  isEmpty() {
    return !this.top ? true : false
  }
}

class Queue {
  constructor () {
    this.front = []
  }


}

module.exports = {
  Node,
  Stack,
  Queue
}
