const PseudoQueue = require('../queue-with-stacks')

 xdescribe('Queue class:', () => {
    test('initiate new queue', () => {
      let testQueue = new PseudoQueue()
      expect(testQueue).toEqual( { 'top': null })
    })

    describe('enqueue()', () => {
      test('that a new nodes are added to the end of the queue', () => {
      let testQueue = new PseudoQueue()
      testQueue.enqueue(10)
      console.log(testQueue)
      expect(testQueue.top).toEqual({ 'value': 10, 'next': null})
      testQueue.enqueue(20)
      testQueue.enqueue(30)
      expect(testQueue.top).toEqual({ 'value': 10, 'next': 
      expect.objectContaining({ 'value': 20, 'next':
      expect.objectContaining({ 'value': 30, 'next': null })})})
      })
    })

    describe('dequeue()', () => {
      test('that the queue has been modified appropriately', () => {
        let testQueue = new PseudoQueue()
        testQueue.enqueue(10)
        testQueue.enqueue(20)
        testQueue.dequeue()
        expect(testQueue.top).toEqual({ 'value' : 20, 'next': null})
        testQueue.dequeue()
        expect(testQueue.top).toEqual(null)
      })
      test('that using the dequeue() method on an empty queue returns undefined', () => {
        let testQueue = new PseudoQueue()
        expect(testQueue.dequeue()).toBeUndefined()
      })
    })
 })