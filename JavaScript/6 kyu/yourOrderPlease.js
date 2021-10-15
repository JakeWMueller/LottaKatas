function order(words){
    //edge case of not having a string input
    if (!words) return '';
    //split the words along their spaces, and reduce
    return words.split(' ').reduce((sortedWords, word) => {
        //regular expression to match which characters in the string are a digit
        let digit = +word.match(/\d/)[0];
        //sorting the words in order by index, - 1 because JS is 0th indexed
        sortedWords[digit - 1] = word;
        return sortedWords;
        //enlarge along the spaces
    }, []).join(' ');
}


console.log(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
console.log(order('4of Fo1r pe6ople g3ood th5e the2'), 'Fo1r the2 g3ood 4of th5e pe6ople');
console.log(order(''), '');
