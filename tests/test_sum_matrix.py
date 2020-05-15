from code_challenges.sum_matrix.sum_matrix import sum_matrix

def test_one():
    actual = sum_matrix([[1,2,3],[4,5,6],[7,8,9]])
    expected = [6, 15, 24]
    assert actual == expected

def test_two():
    actual = sum_matrix([[1,2,3,4,5,6,7,8,9,10],[11],[]])
    expected = [55, 11, 0]
    assert actual == expected

def test_three():
    actual = sum_matrix([[]])
    expected = [0]
    assert actual == expected

def test_four():
    actual = sum_matrix([[1,-2],[3,4,5,-6],[-7,8],[-9,-10],[-4]])
    expected = [-1, 6, 1, -19, -4 ]
    assert actual == expected
