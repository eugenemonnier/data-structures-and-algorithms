import pytest
from code_challenges.fifo_animal_shelter.fifo_animal_shelter import AnimalShelter

def test_AnimalShelter__init__():
    test_shelter = AnimalShelter()
    actual = test_shelter.shelter
    expected = []
    assert actual == expected

def test_AnimalShelter_enqueue_dog(sample_shelter):
    sample_shelter.enqueue('dog')
    actual = sample_shelter.shelter
    expected = ['cat', 'cat', 'dog', 'cat', 'dog', 'dog']
    assert actual == expected

def test_AnimalShelter_enqueue_cat(sample_shelter):
    sample_shelter.enqueue('cat')
    actual = sample_shelter.shelter
    expected = ['cat', 'cat', 'dog', 'cat', 'dog', 'cat']
    assert actual == expected

def test_AnimalShelter_enqueue_dragon(sample_shelter):
    actual = sample_shelter.enqueue('dragon')
    expected = "We don't serve their kind here"
    assert actual == expected
    actual = sample_shelter.shelter
    expected = ['cat', 'cat', 'dog', 'cat', 'dog']
    assert actual == expected

def test_AnimalShelter_dequeue_dog(sample_shelter):
    actual = sample_shelter.dequeue('dog')
    expected = 'dog'
    assert actual == expected
    actual = sample_shelter.shelter
    expected = ['cat', 'cat', 'cat', 'dog']
    assert actual == expected

def test_AnimalShelter_dequeue_cat(sample_shelter):
    actual = sample_shelter.dequeue('cat')
    expected = 'cat'
    assert actual == expected
    actual = sample_shelter.shelter
    expected = ['cat', 'dog', 'cat', 'dog']
    assert actual == expected

def test_AnimalShelter_dequeue_nopref(sample_shelter):
    actual = sample_shelter.dequeue()
    expected = 'cat'
    assert actual == expected
    actual = sample_shelter.shelter
    expected = ['cat', 'dog', 'cat', 'dog']
    assert actual == expected

def test_AnimalShelter_dequeue_dragon(sample_shelter):
    actual = sample_shelter.dequeue('dragon')
    expected = None
    assert actual == expected
    actual = sample_shelter.shelter
    expected = ['cat', 'cat', 'dog', 'cat', 'dog']
    assert actual == expected

@pytest.fixture
def sample_shelter():
    shelter = AnimalShelter()
    shelter.enqueue('cat')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    shelter.enqueue('cat')
    shelter.enqueue('dog')
    return shelter
