from code_challenges.repeated_words.repeated_words import word_match

def test_repeated_words_one():
    assert word_match('Once upon a time, there was a brave princess who...') == 'a'

def test_repeated_words_two():
    assert word_match("It was the best of times, it was the worst of times") == 'it'


def test_repeated_words_three():
    assert word_match('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...') == 'summer'

def test_repeated_words_no_match():
    assert word_match('There are no repeated words here.') == 'No match.'
