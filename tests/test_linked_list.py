import pytest
from code_challenges.data_structures.linked_list.linked_list import Node
from code_challenges.data_structures.linked_list.linked_list import LinkedList
from code_challenges.data_structures.linked_list.linked_list import merge_lists

def test_linked_list():
    test_list = LinkedList()
    actual = test_list.head
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

def test_append():
    append_test_list = LinkedList()
    append_test_list.append(20)
    actual = append_test_list.head.value
    excepted = 20
    assert actual == excepted
    actual = append_test_list.head.next
    excepted = None
    assert actual == excepted

def test_includes_found(sample_linked_list):
    actual = sample_linked_list.includes(30)
    expected = True
    assert actual == expected

def test_insert_before_found(sample_linked_list):
    sample_linked_list.insert_before(20, 15)
    actual = sample_linked_list.head.next.value
    expected = 15
    assert actual == expected

def test_insert_before_not_found(sample_linked_list):
    actual = sample_linked_list.insert_before(2, 15)
    expected = 'Search value not found'
    assert actual == expected

def test_insert_after_found(sample_linked_list):
    sample_linked_list.insert_after(20, 15)
    actual = sample_linked_list.head.next.next.value
    expected = 15
    assert actual == expected

def test_insert_after_not_found(sample_linked_list):
    actual = sample_linked_list.insert_after(2, 15)
    expected = 'Search value not found'
    assert actual == expected

def test_kth_happy_path(sample_linked_list):
    actual = sample_linked_list.kth(2)
    expected = 20
    assert actual == expected

def test_kth_expected_failure(sample_linked_list):
    actual = sample_linked_list.kth(4)
    expected = 'Input value is greater than the length of the list.'
    assert actual == expected

def test_kth_edge_case(sample_linked_list):
    actual = sample_linked_list.kth(-1)
    expected = 'Invalid input value. Input must be greater than -1.'
    assert actual == expected

def test__str__(sample_linked_list):
    actual = sample_linked_list.__str__()
    expected = '10 -> 20 -> 30 -> 40 -> None'
    assert actual == expected

def test__str__empty_list():
    empty_linked_list = LinkedList()
    actual = empty_linked_list.__str__()
    expected = 'None'
    assert actual == expected

def test_merge_lists_happy_path(sample_linked_list, sample_linked_list_b):
    merged_ll = merge_lists(sample_linked_list, sample_linked_list_b)
    actual = merged_ll.__str__()
    expected = '10 -> 15 -> 20 -> 25 -> 30 -> 35 -> 40 -> 45 -> 55 -> 65 -> None'
    assert actual == expected

def test_merge_lists_one_empty_ll(sample_linked_list, empty_ll):
    merged_ll = merge_lists(sample_linked_list, empty_ll)
    actual = merged_ll.__str__()
    expected = '10 -> 20 -> 30 -> 40 -> None'
    assert actual == expected

def test_merge_lists_two_empty_ll(empty_ll):
    merged_ll = merge_lists(empty_ll, empty_ll)
    actual = merged_ll.__str__()
    expected = 'None'
    assert actual == expected

@pytest.fixture
def sample_linked_list():
    linked_list = LinkedList()
    linked_list.append(10)
    linked_list.append(20)
    linked_list.append(30)
    linked_list.append(40)
    return linked_list

@pytest.fixture
def sample_linked_list_b():
    linked_list = LinkedList()
    linked_list.append(15)
    linked_list.append(25)
    linked_list.append(35)
    linked_list.append(45)
    linked_list.append(55)
    linked_list.append(65)
    return linked_list

@pytest.fixture
def empty_ll():
    return LinkedList()
