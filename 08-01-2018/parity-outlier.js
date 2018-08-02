function findOutlier(integers){
  // a place to keep track of the number of odd numbers
  let odds = 0;
  // a place to keep track of the number of even numbers
  let evens = 0;

  let lastFoundEven;
  let lastFoundOdd;

  // iterate over the array
  for (let i = 0; i < integers.length; i++) {
    const currentValue = integers[i];
    // if the current value is even - increment evens
    if (currentValue % 2 === 0) {
      evens++;
      lastFoundEven = currentValue;
    } else {
      // else - increment odds
      odds++;
      lastFoundOdd = currentValue;
    }

    // if number of evens is greater than 1 and number of odds is 1
    if (evens > 1 && odds === 1) {
      // we found it
      return lastFoundOdd;
    } else if (odds > 1 && evens === 1) {
      // else if number of odds is greater than 1 and number of evens is 1
      // we found it!
      return lastFoundEven;
    }
  }
}

function findOutlier(integers) {
  // have a place to store the odds
  let odds = [];
  // have a place to store the evens
  let evens = [];
  // iterate over the integers
  for (let i = 0; i < integers.length; i++) {
    const currentValue = integers[i];
    // if even
    if (currentValue % 2 === 0) {
      // push into evens
      evens.push(currentValue);
    } else {
      // if odd
      // push into odds
      odds.push(currentValue);
    }

    if (evens.length > 1 && odds.length === 1) {
      // we found it
      return odds[0];
    } else if (odds.length > 1 && evens.length === 1) {
      // else if number of odds is greater than 1 and number of evens is 1
      // we found it!
      return evens[0];
    }
  }
  
  // whichever array is length 1, return its first value
}

function findOutlier(integers) {
  // have a place to store the odds
  let odds = [];
  // have a place to store the evens
  let evens = [];
  // iterate over the integers
  for (let i = 0; i < integers.length; i++) {
    const currentValue = integers[i];
    // if even
    if (currentValue % 2 === 0) {
      // push into evens
      evens.push(currentValue);
    } else {
      // if odd
      // push into odds
      odds.push(currentValue);
    }
  }
  
  // whichever array is length 1, return its first value
  return odds.length === 1 ? odds[0] : evens[0];
}

function findOutlier(integers) {
  const {odds, evens} = integers.reduce(({odds, evens}, currentValue) => {
    if (currentValue % 2 === 0) {
      evens.push(currentValue);
    } else {
      odds.push(currentValue);
    }

    return {
      odds,
      evens
    };
  }, {
    odds: [],
    evens: []
  });

  return odds.length === 1 ? odds[0] : evens[0];
}

function findOutlier(integers) {
  const evens = integers.filter(i => i % 2 === 0);
  const odds = integers.filter(i => i % 2 !== 0);
  return odds.length === 1 ? odds[0] : evens[0];
}

// Thanks! meiamsome
function findOutlier(num){
  const parity = num[2 * ((num[0] ^ num[1]) & 0x1)] & 0x1;
  return num.find(i => (i ^ parity) & 0x1);
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2,6,8,10,3]), 3);
console.log(findOutlier([0,0,3,0,0]), 3);
console.log(findOutlier([1,1,0,1,1]), 0);