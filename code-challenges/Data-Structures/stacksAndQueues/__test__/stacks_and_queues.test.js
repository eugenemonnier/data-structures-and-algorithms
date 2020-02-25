const { Stack, Queue, Node } = require('../stacks-and-queues.js')

describe('stacks-and-queues module tests:', () => {
  describe('Node class:', () => {
    test('initiate a new node', () => {
      const testNode = new Node(10)
      expect(testNode).toEqual({ value: 10, next: null})
    })
  })

  describe('Stack class:', () => {
    test('initiate a new stack', () => {
      let testStack = new Stack()
      expect(testStack).toEqual({ 'top': null })
    })

    describe('push()', () => {
      test('that a new node will be pushed to the top of the stack', () => {
        let testStack = new Stack()
        expect(testStack.push(50)).toEqual({ 'value': 50, 'next': null })
        expect(testStack.push(100)).toEqual({ 'value': 100, 'next': expect.objectContaining({ 'value': 50, 'next': null}) })
      })
    })

    describe('peek()', () => {
      test('that the return value is the top value of the linked list', () => {
        let testStack = new Stack()
        testStack.push(10)
        expect(testStack.peek()).toEqual(10)
        testStack.push(20)
        testStack.push(30)
        expect(testStack.peek()).toEqual(30)
      })
    })

    describe('pop()', () => {
      test('that the returned value is the value of the new top', () => {
        let testStack = new Stack()
        testStack.push(10)
        testStack.push(20)
        expect(testStack.pop()).toEqual(10)
      })
      test('that the stack has been modified appropriately', () => {
        let testStack = new Stack()
        testStack.push(10)
        testStack.push(20)
        testStack.pop()
        expect(testStack.top).toEqual({ 'value' : 10, 'next': null})
        testStack.pop()
        expect(testStack.top).toEqual(null)
      })
      test('that using the pop() method on an empty stack returns undefined', () => {
        let testStack = new Stack()
        expect(testStack.pop()).toBeUndefined()
      })
    })

    describe('isEmpty()', () => {
      test('if stack is empty, returns true', () => {
        let testStack = new Stack()
        expect(testStack.isEmpty()).toBe(true)
      })
      test('if stack is NOT empty, returns false', () => {
        let testStack = new Stack()
        testStack.push(10)
        expect(testStack.isEmpty()).toBe(false)
      })
    })
  })

  describe('Queue class:', () => {
    test('initiate new queue', () => {
      let testQueue = new Queue()
      expect(testQueue).toEqual( { 'front': null })
    })

    describe('enqueue()', () => {
      test('that a new nodes are added to the end of the queue', () => {
      let testQueue = new Queue()
      testQueue.enqueue(10)
      expect(testQueue.front).toEqual({ 'value': 10, 'next': null})
      testQueue.enqueue(20)
      testQueue.enqueue(30)
      expect(testQueue.front).toEqual({ 'value': 10, 'next': 
      expect.objectContaining({ 'value': 20, 'next':
      expect.objectContaining({ 'value': 30, 'next': null })})})
      })
    })

    describe('dequeue()', () => {
      test(`that it returns the dequeued node's value`, () => {
        let testQueue = new Queue()
        testQueue.enqueue(10)
        testQueue.enqueue(20)
        expect(testQueue.dequeue()).toEqual(10)
      })
      test('that the queue has been modified appropriately', () => {
        let testQueue = new Queue()
        testQueue.enqueue(10)
        testQueue.enqueue(20)
        testQueue.dequeue()
        expect(testQueue.front).toEqual({ 'value' : 20, 'next': null})
        testQueue.dequeue()
        expect(testQueue.front).toEqual(null)
      })
      test('that using the dequeue() method on an empty queue returns undefined', () => {
        let testQueue = new Queue()
        expect(testQueue.dequeue()).toBeUndefined()
      })
    })

    describe('peek()', () => {
      test('that it returns the front of the queue', () => {
        let testQueue = new Queue()
        testQueue.enqueue(10)
        testQueue.enqueue(20)
        expect(testQueue.peek()).toEqual(10)
      })
    })

    describe('isEmpty()', () => {
      test('if stack is empty, returns true', () => {
        let testQueue = new Queue()
        expect(testQueue.isEmpty()).toBe(true)
      })
      test('if stack is NOT empty, returns false', () => {
        let testQueue = new Queue()
        testQueue.enqueue(10)
        expect(testQueue.isEmpty()).toBe(false)
      })
    })
  })
})