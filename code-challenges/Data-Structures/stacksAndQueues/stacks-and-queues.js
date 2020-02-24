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
    this.front = null
  }

  enqueue(value) {
    let newNode = new Node(value)
    if (!this.front) {
      this.front = newNode
    } else {
      let currNode = this.front
      while (currNode.next) {
        currNode = currNode.next
      }
      currNode.next = newNode
    }
    return this.head
  }

  dequeue() {
    let dequeueVal
    if (!this.front) {
      return undefined
    } else if (!this.front.next) {
      dequeueVal = this.front.value
      this.front = null
    } else {
      dequeueVal = this.front.value
      this.front.value = this.front.next.value
      this.front.next = this.front.next.next
    }
    return dequeueVal
  }

  peek() {
    return this.front.value
  }

  isEmpty() {
    return !this.front ? true : false
  }
}

module.exports = {
  Node,
  Stack,
  Queue
}
