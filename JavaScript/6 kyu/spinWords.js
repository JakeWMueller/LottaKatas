function reverseString(input) {
    return input.split('').reverse().join('');
};

function spinWords(sentence){
  // a place to store results
  let result = '';
  // split the sentence on spaces  
  const words = sentence.split(' ');
  // iterate over the split words array
  for (let index = 0; index < words.length; index++) {
      let word = words[index];
      if (word.length > 4) {
          //reverse the indexed word
          word = reverseString(word);
          
      }
      // add it to the result
        result += ' ' + word;
  } 
  return result.trim();
};


console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");