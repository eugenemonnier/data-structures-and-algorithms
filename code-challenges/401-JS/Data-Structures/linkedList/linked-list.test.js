class Node {
  constructor (value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  append (val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      return this.head
    }

    let currNode = this.head
    while (currNode.next !== null) {
      currNode = currNode.next
    }
    currNode.next = newNode
    return this.head
  }

  insert (val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    return this.head
  }

  insertBefore (val, nVal) {
    const newNode = new Node(nVal)
    let currNode = this.head
    let validInput = false
    while (currNode.next !== null) {
      if (currNode.value === val) {
        newNode.next = this.head
        this.head = newNode
        validInput = true
        break
      } else if (val === currNode.next.value) {
        newNode.next = currNode.next
        currNode.next = newNode
        validInput = true
        break
      }
      currNode = currNode.next
    }
    if (!validInput) {
      console.error('Error: Search value inputted not in list.')
    }
    return this.head
  }

  insertAfter (val, nVal) {
    const newNode = new Node(nVal)
    let currNode = this.head
    let validInput = false
    while (currNode.next !== null) {
      if (currNode.value === val) {
        newNode.next = currNode.next
        currNode.next = newNode
        validInput = true
        break
      } else if (val === currNode.next.value) {
        newNode.next = currNode.next.next
        currNode.next.next = newNode
        validInput = true
        break
      }
      currNode = currNode.next
    }
    if (!validInput) {
      console.error('Error: Search value inputted not in list.')
    }
    return this.head
  }

  includes (val) {
    let result = false

    if (this.head === null) {
      if (val === this.head) {
        return result = true
      } else {
        return false
      }
    } else {
      let currNode = this.head
      while (currNode.next !== null) {
        if (val === currNode.next.value) {
          result = true
          break
        } else if (val === currNode.value) {
          result = true
          break
        } else if (val === currNode.next.next) {
          result = true
          break
        } else {
          currNode = currNode.next
        }
      }
    }
    return result
  }

  kth (k) {
    let currNode = this.head
    const tempArr = []
    let result
    if (k <= 0) {
      result = 'Invalid input value. Input must be greater than 0.'
    } else {
      while (currNode.next) {
        tempArr.push(currNode.value)
        if (tempArr.length > k) {
          tempArr.shift()
        }
        currNode = currNode.next
      }
      tempArr.push(currNode.value)
      if (tempArr.length > k) {
        tempArr.shift()
      }
      if (tempArr.length < k) {
        result = 'Input value is greater than length of list.'
      } else {
        result = tempArr[0]
      }
    }
    return result
  }

  toString () {
    let linkedString = ''
    let currNode = this.head
    if (currNode === null) {
      linkedString = 'NULL'
    } else {
      while (currNode.next !== null) {
        linkedString += `{${currNode.value}} -> `
        currNode = currNode.next
      }
      linkedString += `{${currNode.value}} -> NULL`
    }
    return linkedString
  }
}

function mergeLists (listA, listB) {
  const zipList = new LinkedList()
  let currNodeA = listA.head
  let currNodeB = listB.head
  while (currNodeA || currNodeB) {
    if (currNodeA) {
      zipList.append(currNodeA.value)
      currNodeA = currNodeA.next
    }
    if (currNodeB) {
      zipList.append(currNodeB.value)
      currNodeB = currNodeB.next
    }
  }
  return zipList
}

const testListA = new LinkedList()
const testListB = new LinkedList()
testListA.insert(70)
testListB.insert(60)
testListA.insert(50)
testListB.insert(40)
testListA.insert(30)
testListB.insert(20)
testListA.insert(10)
// console.log(testListA.toString());
// console.log(testListB.toString());
console.log(mergeLists(testListA, testListB).toString())

describe('Linked List module', () => {
  test('mergeLists()', () => {
    const testListA = new LinkedList()
    const testListB = new LinkedList()
    for (let i = 1; i < 5; i += 2) {
      testListA.append(i)
      testListB.append(i + 1)
    }
    const consoleSpy = jest
      .spyOn(console, 'log')
    console.log(mergeLists(testListA, testListB).toString())
    expect(console.log).toHaveBeenCalledWith('{1} -> {2} -> {3} -> {4} -> NULL')
    testListA.append(5)
    console.log(mergeLists(testListA, testListB).toString())
    expect(console.log).toHaveBeenCalledWith('{1} -> {2} -> {3} -> {4} -> {5} -> NULL')
    testListB.append(6)
    testListB.append(8)
    console.log(mergeLists(testListA, testListB).toString())
    expect(console.log).toHaveBeenCalledWith('{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> {8} -> NULL')
  })

  test('Node():', () => {
    expect(() => {
      const testList = new Node(25)
      expect(testList).toStrictEqual({ value: 25, next: null })
    })
  })

  test('LinkedList():', () => {
    expect(() => {
      const testList = new LinkedList()
      expect(testList).toStrictEqual({ head: null })
    })
  })

  test('LinkedList.add():', () => {
    const testList = new LinkedList()
    testList.append(5)
    expect(testList).toStrictEqual(expect.objectContaining({
      head: expect.objectContaining({ value: 5, next: null })
    })
    )
    testList.append(11)
    testList.append(0)
    expect(testList).toStrictEqual(expect.objectContaining({
      head: expect.objectContaining({
        value: 5,
        next: expect.objectContaining({
          value: 11,
          next: expect.objectContaining({ value: 0, next: null })
        })
      })
    })
    )
  })

  test('LinkedList.insert():', () => {
    const testList = new LinkedList()
    testList.insert(10)
    testList.insert(20)
    expect(testList).toStrictEqual(expect.objectContaining({
      head: expect.objectContaining({
        value: 20,
        next: expect.objectContaining({
          value: 10,
          next: null
        })
      })
    })
    )
  })

  test('LinkedList.insertBefore():', () => {
    const testList = new LinkedList()
    testList.append(10)
    testList.append(20)
    testList.toString()
    testList.insertBefore(10, 0)
    expect(testList).toStrictEqual(expect.objectContaining({
      head: expect.objectContaining({
        value: 0,
        next: expect.objectContaining({
          value: 10,
          next: expect.objectContaining({
            value: 20,
            next: null
          })
        })
      })
    })
    )
    testList.toString()
    testList.append(40)
    testList.append(50)
    testList.append(60)
    testList.toString()
    testList.insertBefore(40, 30)
    expect(testList).toStrictEqual(expect.objectContaining({
      head: expect.objectContaining({
        value: 0,
        next: expect.objectContaining({
          value: 10,
          next: expect.objectContaining({
            value: 20,
            next: expect.objectContaining({
              value: 30,
              next: expect.objectContaining({
                value: 40,
                next: expect.objectContaining({
                  value: 50,
                  next: expect.objectContaining({
                    value: 60,
                    next: null
                  })
                })
              })
            })
          })
        })
      })
    })
    )
    const consoleSpy = jest
      .spyOn(console, 'error')
    testList.insertBefore(45, 30)
    expect(consoleSpy).toHaveBeenCalled()
  })

  test('LinkedList.insertAfter():', () => {
    const testList = new LinkedList()
    testList.append(10)
    testList.append(20)
    testList.toString()
    testList.insertAfter(20, 0)
    expect(testList).toStrictEqual(expect.objectContaining({
      head: expect.objectContaining({
        value: 10,
        next: expect.objectContaining({
          value: 20,
          next: expect.objectContaining({
            value: 0,
            next: null
          })
        })
      })
    })
    )
    testList.toString()
    testList.append(40)
    testList.append(50)
    testList.append(60)
    testList.toString()
    testList.insertAfter(40, 30)
    expect(testList).toStrictEqual(expect.objectContaining({
      head: expect.objectContaining({
        value: 10,
        next: expect.objectContaining({
          value: 20,
          next: expect.objectContaining({
            value: 0,
            next: expect.objectContaining({
              value: 40,
              next: expect.objectContaining({
                value: 30,
                next: expect.objectContaining({
                  value: 50,
                  next: expect.objectContaining({
                    value: 60,
                    next: null
                  })
                })
              })
            })
          })
        })
      })
    })
    )
    const consoleSpy = jest
      .spyOn(console, 'error')
    testList.insertAfter(45, 30)
    expect(consoleSpy).toHaveBeenCalled()
  })

  test('LinkedList.includes()', () => {
    const testList = new LinkedList()
    // check null value for empty linked list
    expect(testList.includes(null)).toStrictEqual(true)
    testList.insert(10)
    testList.insert(20)
    testList.insert(30)
    testList.insert(40)
    testList.insert(50)
    testList.insert(60)
    testList.insert(70)
    // check last value
    expect(testList.includes(10)).toStrictEqual(true)
    // check middle value
    expect(testList.includes(30)).toStrictEqual(true)
    // check first value
    expect(testList.includes(70)).toStrictEqual(true)
    // check null value
    expect(testList.includes(null)).toStrictEqual(true)
    // check nonexistent value
    expect(testList.includes(243)).toStrictEqual(false)
  })

  test('LinkedList.kth()', () => {
    const testList = new LinkedList()
    testList.insert(70)
    // where linked list size is 1
    // where k and the length of the list are the same
    expect(testList.kth(1)).toStrictEqual(70)
    testList.insert(60)
    testList.insert(50)
    testList.insert(40)
    testList.insert(30)
    testList.insert(20)
    testList.insert(10)
    // where k is greater than the length of the linked list
    expect(testList.kth(8)).toBe('Input value is greater than length of list.')
    // where k is not a positive integer
    expect(testList.kth(-1)).toBe('Invalid input value. Input must be greater than 0.')
    // happy path in the middle
    expect(testList.kth(4)).toStrictEqual(40)
  })

  test('LinkedList.toString()', () => {
    const testList = new LinkedList()
    // check works with empty linked list
    expect(testList.toString()).toStrictEqual('NULL')
    testList.insert(10)
    testList.insert(20)
    testList.insert(30)
    testList.insert(40)
    testList.insert(50)
    testList.insert(60)
    testList.insert(70)
    expect(testList.toString()).toStrictEqual('{70} -> {60} -> {50} -> {40} -> {30} -> {20} -> {10} -> NULL')
  })
})
