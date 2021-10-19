// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  //store the sum, to be added onto by each number we find that is a multiple
  let sum = 0;
  
  //iterate down from number minus 1 so as not to include the input number itself, the instructions asked for that
  for (let i = number - 1; i > 0; i--) {
    //if number is divisible by 5 add it to the sum
    if (i % 5 === 0) {
      sum += i;
      } else if (i % 3 === 0) {
          sum += i;
      }
    }
  return sum
};