import pytest
from code_challenges.tree_intersection.tree_intersection import Node, BinaryTree, tree_intersection

def test_tree_intersection_matches(tree_a, tree_b):
    assert tree_intersection(tree_a, tree_b) == [8, 13, 30, 5, 11]

def test_tree_intersection_no_match(tree_a, tree_c):
    assert tree_intersection(tree_a, tree_c) == ['No matches found.']

def test_tree_intersection_empty_array(tree_a):
    empty_tree = BinaryTree()
    assert tree_intersection(tree_a, empty_tree) == ['No matches found.']



@pytest.fixture
def tree_a():
    test_tree = BinaryTree()
    test_tree.root = Node(10)
    test_tree.root.left = Node(13)
    test_tree.root.left.left = Node(5)
    test_tree.root.left.left.left = Node(20)
    test_tree.root.left.left.right = Node(11)
    test_tree.root.left.right = Node(6)
    test_tree.root.left.right.left = Node(8)
    test_tree.root.right = Node(30)
    test_tree.root.right.left = Node(95)
    test_tree.root.right.right = Node(0)
    return test_tree

@pytest.fixture
def tree_b():
    test_tree = BinaryTree()
    test_tree.root = Node(8)
    test_tree.root.left = Node(13)
    test_tree.root.left.left = Node(12)
    test_tree.root.left.right = Node(30)
    test_tree.root.right = Node(5)
    test_tree.root.right.left = Node(50)
    test_tree.root.right.right = Node(7)
    test_tree.root.right.left.left = Node(11)
    return test_tree

@pytest.fixture
def tree_c():
    test_tree = BinaryTree()
    test_tree.root = Node(-10)
    test_tree.root.left = Node(-13)
    test_tree.root.left.left = Node(-5)
    test_tree.root.left.left.left = Node(-20)
    test_tree.root.left.left.right = Node(-11)
    test_tree.root.left.right = Node(-6)
    test_tree.root.left.right.left = Node(-8)
    test_tree.root.right = Node(-30)
    test_tree.root.right.left = Node(-95)
    test_tree.root.right.right = Node(-1)
    return test_tree
