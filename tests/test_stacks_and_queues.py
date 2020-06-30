import pytest
from code_challenges.data_structures.stacks_and_queues.stacks_and_queues import Node, Stack, Queue, PseudoQueue

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

def test_pseudo_queue():
    test_queue = PseudoQueue()
    actual = test_queue.top
    expected = None
    assert actual == expected

def test_stack_peek(sample_stack):
    actual = sample_stack.peek()
    expected = 1
    assert actual == expected

def test_stack_push(sample_stack):
    sample_stack.push(0)
    actual = sample_stack.__str__()
    expected = '0 -> 1 -> 2 -> 3 -> 4 -> 5 -> None'
    assert actual == expected

def test_stack_pop(sample_stack):
    actual = sample_stack.pop()
    expected = 1
    assert actual == expected
    actual = sample_stack.__str__()
    expected = '2 -> 3 -> 4 -> 5 -> None'
    assert actual == expected

def test_stack_isEmpty_false(sample_stack):
    actual = sample_stack.isEmpty()
    expected = False
    assert actual == expected

def test_stack_isEmpty_true():
    sample_stack = Stack()
    actual = sample_stack.isEmpty()
    expected = True
    assert actual == expected

def test_queue_enqueue(sample_queue):
    sample_queue.enqueue(6)
    actual = sample_queue.__str__()
    expected = '1 -> 2 -> 3 -> 4 -> 5 -> 6 -> None'
    assert actual == expected

def test_queue_dequeue(sample_queue):
    actual = sample_queue.dequeue()
    expected = 1
    assert actual == expected
    actual = sample_queue.__str__()
    expected = '2 -> 3 -> 4 -> 5 -> None'
    assert actual == expected

def test_queue_peek(sample_queue):
    actual = sample_queue.peek()
    expected = 1
    assert actual == expected

def test_queue_isEmpty_false(sample_queue):
    actual = sample_queue.isEmpty()
    expected = False
    assert actual == expected

def test_queue_isEmpty_true():
    sample_queue = Queue()
    actual = sample_queue.isEmpty()
    expected = True
    assert actual == expected

def test_pseudo_queue_enqueue(sample_stack):
    sample_stack.enqueue(6)
    actual = sample_stack.__str__()
    expected = '1 -> 2 -> 3 -> 4 -> 5 -> 6 -> None'
    assert actual == expected

def test_pseudo_queue_dequeue(sample_stack):
    actual = sample_stack.dequeue()
    expected = 1
    assert actual == expected
    actual = sample_stack.__str__()
    expected = '2 -> 3 -> 4 -> 5 -> None'
    assert actual == expected

@pytest.fixture
def sample_stack():
    stack = PseudoQueue()
    stack.push(5)
    stack.push(4)
    stack.push(3)
    stack.push(2)
    stack.push(1)
    return stack

@pytest.fixture
def sample_queue():
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    return queue
