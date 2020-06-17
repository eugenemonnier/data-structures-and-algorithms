import pytest
from code_challenges.data_structures.tree.tree import Node, BinarySearchTree, BinaryTree

def test_breadth_first(sample_tree):
    actual = sample_tree.breadth_first()
    expected = [10, 19, 5, 82, 3, 420, 2]
    assert actual == expected

def test_find_max_value(sample_tree):
    actual = sample_tree.find_maximum_value()
    expected = 420
    assert actual == expected

@pytest.fixture
def sample_tree():
    test_tree = BinaryTree()
    test_tree.root = Node(10)
    test_tree.root.left = Node(19)
    test_tree.root.left.left = Node(82)
    test_tree.root.left.right = Node(3)
    test_tree.root.right = Node(5)
    test_tree.root.right.left = Node(420)
    test_tree.root.right.left.left = Node(2)
    return test_tree
