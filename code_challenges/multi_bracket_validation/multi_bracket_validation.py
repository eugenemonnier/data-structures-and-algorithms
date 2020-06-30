def multi_bracket_validation(string):
    left_bracket = {
        '(': 1,
        '[': 2,
        '{': 3,
    }
    right_bracket = {
        ')': 1,
        ']': 2,
        '}': 3,
    }

    braces = list()
    for char in string:
        if char in left_bracket:
            braces.insert(0, left_bracket[char])
        elif char in right_bracket:
            if right_bracket[char] == braces[0]:
                braces.pop(0)
            else:
                return False
    return len(braces) == 0
