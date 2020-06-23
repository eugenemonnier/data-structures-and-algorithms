import string

def word_match(phrase):
    mod_str = phrase.lower().translate(str.maketrans('', '', string.punctuation))
    word_dict = {}
    matched_word = 'No match.'
    word_arr = mod_str.split()
    i = 0
    while i < len(word_arr):
        print(i)
        print(word_arr[i])
        print(word_dict)
        if word_arr[i] in word_dict:
            matched_word = word_arr[i]
            break
        else: word_dict[word_arr[i]] = word_arr[i]
        i += 1
    return matched_word

print(word_match('this has a match, word match'))
