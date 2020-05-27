import pytest
from code_challenges.data_structures.stacks_and_queues.stacks_and_queues import Node, Stack, Queue

def test_stack():
    test_stack = Stack()
    actual = test_stack.top
    expected = None
    assert actual == expected

def test_queue():
    test_queue = Queue()
    actual = test_queue.front
    expected = None
    assert actual == expected

def test_node():
    test_node = Node(10)
    actual = test_node.value
    expected = 10
    assert actual == expected
    actual = test_node.next
    expected = None
    assert actual == expected
