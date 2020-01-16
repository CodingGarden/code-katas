function sum(numbers) {  
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function sum(numbers) {  
  let taco = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    taco += numbers[i];
  }
  return taco;
}

function sum(numbers) {  
  let total = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    total += numbers[i];
  }
  return total;
}

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    total += value;
  }
  return total;
}

function sum(numbers) {  
  let total = 0;
  const addTotal = (value, i, array) => {
    total += value;
  };
  numbers.forEach(addTotal);
  
  return total;
}

function sum(numbers) {  
  let total = 0;

  numbers.forEach((value) => {
    total += value;
  });
  
  return total;
}


function sum(numbers) {
  return numbers.reduce((total, value, i, array) => {
    total += value;
    return total;
  }, 0);
}

function sum(numbers) {
  return numbers.reduce((total, value, i, array) => {
    return total + value;
  }, 0);
}

function sum(numbers) {
  return numbers.reduce((total, value) => total + value, 0);
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);

const result = [1, 1, 6, 3, 8, 5, 5, 12, 9, 3, 7]
  .reduce((counts, value) => {
    counts[value] = counts[value] || 0;
    // if (!counts[value]) {
    //   counts[value] = 0;
    // }
    counts[value]++;
    return counts;
  }, {});

console.log(result);
console.log(Object.keys(result));

// Dictionary<Int, Animal>
// const dictionary = {};
// dictionary[JSON.stringify({ name: 'CJ' })]
 