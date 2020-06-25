import pytest
from code_challenges.left_join.left_join import left_join

def test_left_join_happy_path(left_map, right_map):
    assert left_join(left_map, right_map) == [
        ['fond', 'enamored', 'averse'],
        ['wrath', 'anger', 'delight'],
        ['diligent', 'employed', 'idle'],
        ['outfit', 'garb', None],
        ['guide', 'usher', 'follow']
        ]

def test_left_join_empty_right(left_map):
    empty_map = {}
    assert left_join(left_map, empty_map) == [
        ['fond', 'enamored', None],
        ['wrath', 'anger', None],
        ['diligent', 'employed', None],
        ['outfit', 'garb', None],
        ['guide', 'usher', None]
        ]

def test_left_join_empty_left(right_map):
    empty_map = {}
    assert left_join(empty_map, right_map) == []

def test_left_join_both_empty():
    empty_map = {}
    assert left_join(empty_map, empty_map) == []

@pytest.fixture
def left_map():
    test_map = {
        'fond': 'enamored',
        'wrath': 'anger',
        'diligent': 'employed',
        'outfit': 'garb',
        'guide': 'usher'
    }
    return test_map

@pytest.fixture
def right_map():
    test_map = {
        'fond': 'averse',
        'wrath': 'delight',
        'diligent': 'idle',
        'guide': 'follow',
        'flow': 'jam',
    }
    return test_map
