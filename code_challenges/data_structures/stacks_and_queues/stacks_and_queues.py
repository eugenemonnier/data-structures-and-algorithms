class Node:
    def __init__(self, value, next = None):
        self.value = value
        self.next = next

class Stack:
    def __init__(self):
        self.top = None

    def peek(self):
        return self.top

    def push(self, val):
        new_node = Node(val)
        new_node.next = self.top
        self.top = new_node
        return self.top

    def pop(self):
        if not self.top:
            return None
        elif not self.top.next:
            self.top = None
            return self.top
        else:
            self.top.value = self.top.next.value
            self.top.next = self.top.next.next
            return this.top.value

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
