function narcissistic(value) {
  //this function gets how many digits are in a number
  const length = Math.floor(Math.log10(Math.abs(value))) + 1;
  //a place to store the sum of the digits after raising them to their power and adding them
  let sum = 0;
  let digits = value;
  //while the current value is greater than 0
  while (digits > 0) {
      //grab the last digit of the number
      const digit = digits % 10;
      //raise that digit to the length power, add the value to the sum
      sum += Math.pow(digit, length);
      //remove that digit from the value    
      digits = Math.floor(digits / 10);

  }
  return sum == value;
};



console.log(narcissistic( 7 ), true, "7 is narcissistic" );
console.log(narcissistic( 371 ), true, "371 is narcissistic" );