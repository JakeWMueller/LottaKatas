function correct(string) {
  //side note, replace() let's us use a function inside the replace with parameter
  //every letter that gets matched from the regex will get placed into the letter function
  //then will return the thing we want the letter to be. This is a single iteration
    return string.replace(/5|0|1/g, (letter) => {
      //switch over the given letter
      switch(letter) {
          case '5':
            return 'S';
          case '0':
            return 'O';
          case '1':
            return 'I';
      }
    });
}