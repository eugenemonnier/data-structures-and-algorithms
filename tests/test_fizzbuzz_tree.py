from code_challenges.fizzbuzz_tree.fizzbuzz_tree import Node, BinaryTree, fizzbuzz_tree, fizzify, fb_tree_helper

def test_fizzify():
    actual = fizzify(15)
    expected = 'fizzbuzz'
    assert actual == expected
    actual = fizzify(9)
    expected = 'fizz'
    assert actual == expected
    actual = fizzify(20)
    expected = 'buzz'
    assert actual == expected
    actual = fizzify(13)
    expected = '13'
    assert actual == expected

def test_fizzbuzz_tree():
    test_tree = BinaryTree()
    test_tree.add(5)
    test_tree.add(1)
    test_tree.add(56)
    test_tree.add(542)
    test_tree.add(57)
    test_tree.add(45)
    test_tree.add(55)
    actual = fizzbuzz_tree(test_tree).__str__()
    expected = '(buzz)\n' '\t└── (1)\n' '\t└── (56)\n' '\t\t└── (fizzbuzz)\n' '\t\t\t└── (buzz)\n' '\t\t└── (542)\n' '\t\t\t└── (fizz)\n'
    assert actual == expected
