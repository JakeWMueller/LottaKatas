function divisors(integer) {
  divisorsArray = [];
  //instructions say greater than 1 so start at 2.
  //We don't need to include the integer itself, so the loop stops when it gets to the integer.
  for (let index = 2; index < integer; index++) {
      if (integer % index == 0){
          divisorsArray.push(index);
      }
  }
  //if the results array is empty, return is prime
  if (divisorsArray.length == 0) {
      return integer + ' is prime';
  }
  return divisorsArray;
};

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");