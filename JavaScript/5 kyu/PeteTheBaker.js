function cakes(recipe, available) {
  let cakes = 0;
  for (let ingredient in recipe) {
      if (available[ingredient]){
          const amountPerCake = recipe[ingredient];
          const amountAvailable = available[ingredient];
          const possibleNumOfCakes = Math.floor(amountAvailable / amountPerCake);
          if(!cakes || possibleNumOfCakes < cakes){
              cakes = possibleNumOfCakes;
          }
      } else {
        return 0;
      }
  }
  return cakes;
}

recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available), 0);