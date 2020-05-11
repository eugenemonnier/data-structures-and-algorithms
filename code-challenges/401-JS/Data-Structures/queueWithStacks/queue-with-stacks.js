const { Stack, Node } = require('../stacksAndQueues/stacks-and-queues')

class PseudoQueue extends Stack {
  constructor () {
    super(top)
  }

  enqueue (value) {
    const firstStack = new PseudoQueue()
    const secondStack = new PseudoQueue()
    if (!this.top) {
      secondStack.push(value)
    } else {
      let currNode = this.top
      while (currNode.next) {
        firstStack.push(currNode.value)
        currNode = currNode.next
      }
      firstStack.push(currNode.value)
      firstStack.push(value)
      let otherNode = firstStack.top
      while (otherNode.next) {
        secondStack.push(otherNode.value)
        otherNode = otherNode.next
      }
      secondStack.push(otherNode.value)
    }
    this.top = secondStack.top
    return this.top
  }

  dequeue () {
    return this.pop()
  }
}

module.exports = PseudoQueue
