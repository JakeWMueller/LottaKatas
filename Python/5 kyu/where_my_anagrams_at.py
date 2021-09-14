# What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

# 'abba' & 'baab' == true

# 'abba' & 'bbaa' == true

# 'abba' & 'abbba' == false

# 'abba' & 'abca' == false

# Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

# anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) = > ['aabb', 'bbaa']

# anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) = > ['carer', 'racer']

# anagrams('laser', ['lazing', 'lazy',  'lacer']) = > []



def anagrams(word, words):
    #maybe a shorter way, but this is what I've got
    #this dict counts how many of each letter are in the first input word
    dict_word = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0,
                 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0}
    #this will be our end result, our list of words that are anagrams to our input word
    the_anagrams = []
    #turn the first input into lowercase for edge cases
    word.lower()
    #loop through each character of the first input word as many times as there are letters in the word
    for i in range(0, len(word)):
        #whatever letter or character that index is will be the same key as in the dictionary, which then has its value incremented by 1 to count that single instance of a letter
        dict_word[word[i]] += 1

    #a_word is a single word in the list of words, our second input
    for a_word in words:
        #again, avoid edge cases by turning the whole word to lowercase
        a_word.lower()
        #a dictionary to count the letters of these words, one at a time
        dict_words = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0,
                      'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0}
        #loop through each letter of the word we've taken from the list of words
        for i in range(0, len(a_word)):
            #whatever that character is, go to the dict and add 1
            dict_words[a_word[i]] += 1
            #set variable anagrams to True
            anagrams = True
            #go through the keys of the newest dictionary
            for c in dict_words:
                #if that letter's number count is different than the number count of the first word, it's not an anagram, it's false
                if(dict_words[c] != dict_word[c]):
                    anagrams = False
        #if it is an anagram, add that word to the list of confirmed anagrams.
        if(anagrams == True):
            the_anagrams.append(a_word)
    return the_anagrams
