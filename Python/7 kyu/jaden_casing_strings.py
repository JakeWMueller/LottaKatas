"""Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
"""

# Capitalize the first letter of each word in a string
# "this is a string" separate the string based on spaces
# split along " " . its going to be a for loop
# for word in quote:
#    split " " index to the right one and upper() the letter

def to_jaden_case(quote):
    return ' '.join(s[0].upper() + s[1:] for s in quote.split(' '))

print(to_jaden_case("How can we"))
