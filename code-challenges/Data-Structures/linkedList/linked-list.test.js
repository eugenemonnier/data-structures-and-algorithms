class Node {

constructor(value,next = null){
  this.value = value;
  this.next = next;
}

}

class LinkedList {

  constructor() {
    this.head = null;
  }

  add(val) {
    let createNode = new Node(val);
    if(!this.head){
      this.head = createNode;
      return this.head;
    } 

      let currentNode = this.head;
      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = createNode;
      return console.log(this.head);
  }

  insert(val) {
    let createNode = new Node(val);
    createNode.next = this.head;
    this.head = createNode;
    return this.head;
  }

  includes(val) {
    let result = false;

    if(this.head === null) {
      if(val === this.head){
        return result = true;
      } else {
        return false;
      }
    } else {
      let currentNode = this.head;
      while(currentNode.next !== null) {
        if(val === currentNode.next.value) {
          result = true;
          break;
        } else if (val === currentNode.value) {
          result = true;
          break;
        } else if (val === currentNode.next.next) {
          result = true;
          break;
        } else {
        currentNode = currentNode.next;
        }
      }
    }
    return result;
  }

  toString() {
    let linkedString = '';
    let currentNode = this.head;
    if (currentNode === null) {
      linkedString = 'NULL'
    } 
    else {
      while(currentNode.next !== null) {
        linkedString += `{${currentNode.value}} -> `;
        if (currentNode.next.next === null) {
          linkedString += `{${currentNode.next.value}} -> `;
        }
        currentNode = currentNode.next;
      }
      linkedString += `NULL`;
    }
    return linkedString;
  }

}

let testList = new LinkedList();
testList.insert(10);
testList.insert(20);
testList.insert(30);
testList.insert(40);
testList.insert(50);
testList.insert(60);
testList.insert(70);
console.log(testList.toString());

describe('Linked List module', () => {
  test('Node():', () => {
    expect(() => {
      let testList = new Node(25);
      expect(testList).toStrictEqual({ value: 25, next: null })
    })
  });
  test('LinkedList():', () => {
    expect(() => {
      let testList = new LinkedList();
      expect(testList).toStrictEqual({ head: null });
    });
  });
  test('LinkedList.insert():', () => {
    let testList = new LinkedList();
    testList.insert(10);
    testList.insert(20);
    expect(testList).toStrictEqual(expect.objectContaining({ 
      head: expect.objectContaining({ 
        value: 20, 
        next: expect.objectContaining({ 
          value: 10, 
          next: null })
        }) 
      })
    );
  });
  test('LinkedList.includes()', () => {
    let testList = new LinkedList();
    // check null value for empty linked list
    expect(testList.includes(null)).toStrictEqual(true);
    testList.insert(10);
    testList.insert(20);
    testList.insert(30);
    testList.insert(40);
    testList.insert(50);
    testList.insert(60);
    testList.insert(70);
    // check last value
    expect(testList.includes(10)).toStrictEqual(true);
    // check middle value
    expect(testList.includes(30)).toStrictEqual(true);
    // check first value
    expect(testList.includes(70)).toStrictEqual(true);
    // check null value
    expect(testList.includes(null)).toStrictEqual(true);
    // check nonexistent value
    expect(testList.includes(243)).toStrictEqual(false);
  });
  test('LinkedList.toString()', () => {
    let testList = new LinkedList();
    // check works with empty linked list
    expect(testList.toString()).toStrictEqual('NULL');
    testList.insert(10);
    testList.insert(20);
    testList.insert(30);
    testList.insert(40);
    testList.insert(50);
    testList.insert(60);
    testList.insert(70);
    expect(testList.toString()).toStrictEqual('{70} -> {60} -> {50} -> {40} -> {30} -> {20} -> {10} -> NULL');
  });
});
