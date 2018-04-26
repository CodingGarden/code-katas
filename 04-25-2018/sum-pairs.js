var sum_pairs=function(numbers, sum){
  // a place to store the pairs we encounter
  const pairs = [];
  // for each number in the array
  numbers.forEach((leftNumber, leftIndex) => {
    // iterate over the array
    for (let rightIndex = leftIndex + 1; rightIndex < numbers.length; rightIndex++) {
      const rightNumber = numbers[rightIndex];
      // add the two values
      // if they are equal to sum
      if (leftNumber + rightNumber ==  sum) {
        // store the numbers and the right index
        pairs.push({
          pair: [leftNumber, rightNumber],
          rightIndex
        });
      }
    }
  });

  if (pairs.length > 0) {
    let earliestPair = pairs[0];
    for (let i = 1; i < pairs.length; i++) {
      if (earliestPair.rightIndex > pairs[i].rightIndex) {
        earliestPair = pairs[i];
      }
    }
    // return the earliest pair (lowest second index)
    return earliestPair.pair;
  }
   return undefined;
}

var sum_pairs = function(numbers, sum){
  // a place to keep track of the numbers we have seen
  const seenNumbers = {};
  // iterate over the numbers
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // subtract current number from sum to get the number we need
    const need = sum - currentNumber;
    // check to see if we've seen the number we need before
    if (seenNumbers[need]) {
      // if we have return the pair
      return [need, currentNumber];
    } else {
      // if not, set number as seen
      seenNumbers[currentNumber] = true;
    }
  }
  // return undefined
}


l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

console.log(sum_pairs(l1, 8)+"" == [1, 7]+"", "Basic: ["+l1+"] should return [1, 7] for sum = 8");
console.log(sum_pairs(l2, -6)+"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
console.log(sum_pairs(l3, -7) == undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
console.log(sum_pairs(l4, 2)+"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
console.log(sum_pairs(l5, 10)+"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
console.log(sum_pairs(l6, 8)+"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
console.log(sum_pairs(l7, 0)+"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
console.log(sum_pairs(l8, 10)+"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
