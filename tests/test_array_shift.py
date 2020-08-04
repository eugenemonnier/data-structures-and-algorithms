from code_challenges.array_shift.array_shift import insert__shift_arr

def test_insert_shift_arr_empty_arr():
    assert insert__shift_arr([], 1) == [1]

def test_insert_shift_arr_even():
    assert insert__shift_arr([1, 2, 4, 5], 3) == [1,2,3,4,5]

def test_insert_shift_arr_odd():
    assert insert__shift_arr([1, 2, 4], 3) == [1,2,3,4]
