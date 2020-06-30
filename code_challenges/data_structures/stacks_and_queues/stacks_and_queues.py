class Node:
    def __init__(self, value, next = None):
        self.value = value
        self.next = next

class Stack:
    def __init__(self):
        self.top = None

    def peek(self):
        return self.top.value

    def push(self, val):
        new_node = Node(val)
        new_node.next = self.top
        self.top = new_node
        return self.top

    def pop(self):
        if not self.top:
            return None
        elif not self.top.next:
            popped = self.top
            self.top = None
            return popped
        else:
            popped = self.top.value
            self.top.value = self.top.next.value
            self.top.next = self.top.next.next
            return popped

    def isEmpty(self):
        return not self.top

    def __str__(self):
        stack = str()
        curr_node = self.top
        if not curr_node: return 'None'
        while curr_node.next:
            stack += str(curr_node.value) + ' -> '
            curr_node = curr_node.next
        stack += str(curr_node.value) + ' -> None'
        return stack

class Queue:
    def __init__(self):
        self.front = None

    def enqueue(self, val):
        new_node = Node(val)
        if not self.front:
            self.front = new_node
        else:
            curr_node = self.front
            while curr_node.next:
                curr_node = curr_node.next
            curr_node.next = new_node
        return self.front

    def dequeue(self):
        dequeue_value = None
        if not self.front:
            return dequeue_value
        elif not self.front.next:
            dequeue_value = self.front.value
            self.front = None
        else:
            dequeue_value = self.front.value
            self.front.value = self.front.next.value
            self.front.next = self.front.next.next
        return dequeue_value

    def peek(self):
        return self.front.value

    def isEmpty(self):
        return not self.front

    def __str__(self):
        queue = str()
        curr_node = self.front
        if not curr_node: return 'None'
        while curr_node.next:
            queue += str(curr_node.value) + ' -> '
            curr_node = curr_node.next
        queue += str(curr_node.value) + ' -> None'
        return queue

class PseudoQueue(Stack):
  def __init__(self):
      super().__init__()
      self.top = None

  def enqueue(self, value):
    first_stack = PseudoQueue()
    second_stack = PseudoQueue()
    if not self.top:
        second_stack.push(value)
    else:
      curr_node = self.top
      print(self)
      while curr_node.next:
        first_stack.push(curr_node.value)
        curr_node = curr_node.next
      first_stack.push(curr_node.value)
      first_stack.push(value)
      print(first_stack)
      other_node = first_stack.top
      while other_node.next:
        second_stack.push(other_node.value)
        other_node = other_node.next
    second_stack.push(other_node.value)
    self.top = second_stack.top
    return self.top

  def dequeue(self):
    return self.pop()

def __str__(self):
    pass

if __name__ == "__main__":
  test_pseudo = PseudoQueue()
  test_pseudo.push(1)
  test_pseudo.push(2)
  test_pseudo.push(3)
  test_pseudo.enqueue(4)
  print(test_pseudo)
