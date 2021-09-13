"""Given two integers a and b, which can be positive or negative, find the sum of all the integers between
 and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples

get_sum(1, 0) == 1   // 1 + 0 = 1
get_sum(1, 2) == 3   // 1 + 2 = 3
get_sum(0, 1) == 1   // 0 + 1 = 1
get_sum(1, 1) == 1   // 1 Since both are same
get_sum(-1, 0) == -1 // -1 + 0 = -1
get_sum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
"""


def get_sum(a, b):
    result = 0
    if a == b:  # returning would be the same as returning b if they were equal
        return a
    #range produces a sequence of integers from start (inclusive) to stop (exclusive) by step. 
    # range(b, a+1) produces i, i+1, i+2, ... We've added a+1 so as not to have one too many steps in the loop
    elif a > b:
        for i in range(b, a+1):
            result += i
        return result
    elif a < b:
        for i in range(a, b+1):
            result += i
        return result
