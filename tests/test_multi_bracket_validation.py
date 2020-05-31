from code_challenges.multi_bracket_validation.multi_bracket_validation import multi_bracket_validation

def test_multi_bracket_validation_true_simple():
    actual = multi_bracket_validation('{}')
    expected = True
    assert actual == expected

def test_multi_bracket_validation_true_complex():
    actual = multi_bracket_validation('{[]()(([]))}')
    expected = True
    assert actual == expected

def test_multi_bracket_validation_true_extra_characters():
    actual = multi_bracket_validation('{}{Code}[Fellows](())')
    expected = True
    assert actual == expected

def test_multi_bracket_validation_false_odd():
    actual = multi_bracket_validation('{[()}')
    expected = False
    assert actual == expected

def test_multi_bracket_validation_false_simple_even():
    actual = multi_bracket_validation('{[(])}')
    expected = False
    assert actual == expected
