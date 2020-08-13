import pytest

from code_challenges.hashtable.hashtable import Hashtable

def test_hashtable_empty(sample_hashtable):
    assert str(sample_hashtable) == 'None'

def test_hashtable_hash(sample_hashtable):
    assert sample_hashtable.hash('hashtable') == 459

def test_hashtable_add(sample_hashtable):
    sample_hashtable.add('hashtable', 74)
    assert str(sample_hashtable) == str(['hashtable', 74])

def test_hashtable_contains_true(sample_hashtable):
    sample_hashtable.add('hashtable', 74)
    assert sample_hashtable.contains('hashtable') == True

def test_hashtable_contains_false(sample_hashtable):
    sample_hashtable.add('desserts', 74)
    assert sample_hashtable.contains('stressed') == False

def test_hashtable_get_success(sample_hashtable):
    sample_hashtable.add('desserts', 74)
    sample_hashtable.add('stressed', 714)
    assert str(sample_hashtable.get('stressed')) == '714'

def test_hashtable_get_fail(sample_hashtable):
    sample_hashtable.add('desserts', 74)
    with pytest.raises(ValueError):
        sample_hashtable.get('stressed')

@pytest.fixture
def sample_hashtable():
    return Hashtable(1024)
