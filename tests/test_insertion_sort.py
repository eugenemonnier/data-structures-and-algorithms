from code_challenges.insertion_sort.insertion_sort import insertion_sort

def test_reverse_sorted():
    actual = insertion_sort([20,18,12,8,5,-2])
    expected = [-2,5,8,12,18,20]
    assert actual == expected

def test_few_uniques_sorted():
    actual = insertion_sort([5,12,7,5,5,7])
    expected = [5,5,5,7,7,12]
    assert actual == expected

def test_nearly_sorted_sorted():
    actual = insertion_sort([2,3,5,7,13,11])
    expected = [2,3,5,7,11,13]
    assert actual == expected
