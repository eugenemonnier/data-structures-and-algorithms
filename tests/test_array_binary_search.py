from code_challenges.array_binary_search.array_binary_search import binary_search

def test_one():
    actual = binary_search([1,2,3,4,5,6,7,8,9,10],7)
    expected = 6
    assert actual == expected

def test_two():
    actual = binary_search([1,2,3,4,5,6,7,8,9,10],11)
    expected = -1
    assert actual == expected

def test_three():
    actual = binary_search([],7)
    expected = -1
    assert actual == expected

def test_four():
    actual = binary_search([1,2,3,4,5,6,7,8,9,10],4)
    expected = 3
    assert actual == expected
