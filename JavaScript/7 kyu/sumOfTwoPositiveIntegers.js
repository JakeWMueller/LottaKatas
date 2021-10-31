function sumTwoSmallestNumbers(numbers) {
  // find the two smallest numbers

  // a place to store the smallest number
  let smallest;
  // a place to store the 2nd smallest number
  let secondSmallest;

  // compare the first two numbers in the array
  if (numbers[0] < numbers[1]) {
    smallest = numbers[0]
    secondSmallest = numbers[1]
  } else {
    smallest = numbers[1]
    secondSmallest = numbers[0]
  }

  // iterate over numbers starting with the 3rd number
  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // if the current number is smaller than the smallest number
    if (currentNumber < smallest) {
      // set smallest number to be the 2nd smallest number
      secondSmallest = smallest;
      // set the current number to be the smallest number
      smallest = currentNumber;
    } else if (currentNumber < secondSmallest) {
      // else if the current number is smaller than the 2nd smallest number
      // set the 2nd smallest number to the current number
      secondSmallest = currentNumber;
    }
  }

  console.log(smallest, secondSmallest);

  // return the sum of the 2 smallest numbers
  return smallest + secondSmallest;
}

function sumTwoSmallestNumbers(numbers) {
  const smallest = Math.min.apply(null, numbers);
  const smallestIndex = numbers.indexOf(smallest);
  const numbersWithoutSmallest = numbers.slice();
  numbersWithoutSmallest.splice(smallestIndex, 1);
  const secondSmallest = Math.min.apply(null, numbersWithoutSmallest);
  return smallest + secondSmallest;
}

function sumTwoSmallestNumbers(numbers) {
  const smallest = Math.min(...numbers);
  const smallestIndex = numbers.indexOf(smallest);
  const numbersWithoutSmallest = numbers.slice();
  numbersWithoutSmallest.splice(smallestIndex, 1);
  const secondSmallest = Math.min(...numbersWithoutSmallest);
  return smallest + secondSmallest;
}