import pytest

from code_challenges.pythonic.pythonic import PythonicLinkedList

def test_pythonic_linkedlist_for_in(sample_ll):
    number_list = []
    for number in sample_ll:
        number_list.append(number)
    assert number_list == [1,2,3,4,5,6,7]

def test_pythonic_linkedlist_list_comprehension(sample_ll_words):
    uppercase_numbers = [number.upper() for number in sample_ll_words]
    assert uppercase_numbers == ['ONE', 'TWO', 'THREE']

def  test_pythonic_linkedlist_list_cast(sample_ll):
    assert list(sample_ll) == [1,2,3,4,5,6,7]

def  test_pythonic_linkedlist_length(sample_ll):
    assert sample_ll.length == 7

def test_pythonic_linkedlist_filter(sample_ll):
    assert [1,3,5,7] == [number for number in sample_ll if number % 2]

def test_pythonic_linkedlist_next(sample_ll_words):
    iterator = iter(sample_ll_words)
    assert next(iterator) == 'one'
    assert next(iterator) == 'two'
    assert next(iterator) == 'three'

def test_pythonic_linkedlist_stop_iteration(sample_ll):
    iterator = iter(sample_ll)
    with pytest.raises(StopIteration):
        while True:
            number = next(iterator)

def test_pythonic_linkedlist_str(sample_ll_words):
    assert str(sample_ll_words) == '[ one ] -> [ two ] -> [ three ] -> None'

def test_pythonic_linkedlist_equals():
    lla = PythonicLinkedList(['one', 'two', 'three'])
    llb = PythonicLinkedList(['one', 'two', 'three'])
    assert lla == llb

def test_pythonic_linkedlist_get_item(sample_ll):
    assert sample_ll[0] == 1

def test_pythonic_linkedlist_get_item_out_of_range(sample_ll):
    with pytest.raises(IndexError):
        sample_ll[10]

@pytest.fixture
def sample_ll():
    return PythonicLinkedList((1,2,3,4,5,6,7))

@pytest.fixture
def sample_ll_words():
    return PythonicLinkedList(('one', 'two', 'three'))
