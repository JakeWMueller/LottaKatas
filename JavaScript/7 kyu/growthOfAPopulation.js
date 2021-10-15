//the question is asking how many years will it take to surpass the target population p
//when the formula is the initial population p0 plus a small percentage growth, p0 * percent + the immigrants
function nbYear(p0, percent, aug, p ){
  //a counter for the years that have gone by
  let numOfYears = 0;
  //the formula they gave us rewritten with variables
  const formula = p0 => p0 + (p0 * percent/100) + aug;
  //once the population is over the target, we stop
  while (p0 < p) {
    //start with the population they give us, plug it into the function
      p0 = formula(p0);
    //then add 1 year
      numOfYears ++;
    }
  //the loop will quit when it's surpassed the goal and return us how many times it looped
    return numOfYears;
}


console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);

