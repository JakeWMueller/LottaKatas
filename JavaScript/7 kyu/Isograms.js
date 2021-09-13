/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

is_isogram("Dermatoglyphics" ) == true
is_isogram("aba" ) == false
is_isogram("moOse" ) == false # -- ignore letter case
*/

function isIsogram(str){
    //count all the letters in the string and if any of those letter variable counters are more than one
    //then it isn't an isogram. We'll need a place to store the counts
    const counts = {};

    //iterate over the string
    for (let i = 0; i < str.length; i++) {
        //see if we have seen this letter before, toLowerCase accounts for an edge case where the letter shows up as lower or uppercase
        const letter = str[i].toLowerCase();
        if(!counts[letter]) {
            //if not not, add it to the counts variables
            counts[letter] = 1;
        } else {
            //else
                //Not an isogram
            return false;
        }
    }
    return true;
  }