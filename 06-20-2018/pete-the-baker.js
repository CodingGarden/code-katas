function cakes(recipe, available) {
  // a place to store number of cakes we can bake with each ingredient
  let numCakes;
  // iterate over ingredients in recipe
  for (let ingredient in recipe) {
    // check if the ingredient is in available
    if (available[ingredient]) {
      const amountPerCake = recipe[ingredient];
      const amountAvailable = available[ingredient];
      // if is, find remainder of division, dividing available by the needed
      const possibleNumCakes = Math.floor(amountAvailable / amountPerCake);
      if (!numCakes || possibleNumCakes < numCakes) {
        // store the amount for this ingredient in the result
        numCakes = possibleNumCakes;
      }

      if (numCakes == 0) return 0;
    } else {
      // if not, return 0
      return 0;
    }
  }

  // iterate over the result and return the lowest ammount
  return numCakes;
}

function cakes(recipe, available) {
  let numCakes = Infinity; // 🎂
  for (let ingredient in recipe) {
    if (available[ingredient]) {
      const amountPerCake = recipe[ingredient];
      const amountAvailable = available[ingredient];
      const possibleNumCakes = Math.floor(amountAvailable / amountPerCake); ; // 🎂
      if (possibleNumCakes < numCakes) {
        numCakes = possibleNumCakes; ; // 🎂
      }
      if (numCakes == 0) return 0;
    } else {
      return 0;
    }
  }
  return numCakes; ; // 🎂
}

function cakes(recipe, available) {
  return Object.keys(recipe).reduce((numCakes, ingredient) => {
    if (numCakes && available[ingredient]) {
      const amountPerCake = recipe[ingredient];
      const amountAvailable = available[ingredient];
      const possibleNumCakes = Math.floor(amountAvailable / amountPerCake); // 🎂
      if (possibleNumCakes < numCakes) {
        numCakes = possibleNumCakes; ; // 🎂
      }      
      return numCakes;
    } else {
      return 0;
    }
  }, Infinity);
}

recipe = {flour: 500, sugar: 200, eggs: 2};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available), 2);

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available), 0);