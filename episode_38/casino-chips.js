const compare = (a, b) => b - a;

function solve(arr){
  // a place to store the number of days
    // initialized to zero
  let numDays = 0;

  arr.sort(compare);
  // while there are at least 2 stacks with at least 1 chip
  while(arr[0] > 0 && arr[1] > 0) {
    // increment number of days
    numDays++;
    // decrement the 2 highest stacks
    arr[0]--;
    arr[1]--;
    arr.sort(compare);
  }

  return numDays;
}

function solve(arr){
  let numDays = 0;

  arr.sort(compare);
  while(arr[0] > 0 && arr[1] > 0) {
    numDays++;
    arr[0]--;
    arr[1]--;
    arr.sort(compare);
  }

  return numDays;
}

// DOES NOT WORK!
function solve(arr) {
  arr.sort(compare);
  console.log(arr);
  console.log(arr[1] - arr[0]);
  
  return (arr[0] - arr[1]) + (arr[1] - arr[2]);
}

// Solution from code wars
function solve([a,b,c]) {
  return Math.min(a+b,a+c,b+c,Math.floor((a+b+c)/2));
}


// console.log(solve([1,1,1]), 1);
// console.log(solve([2,1,1]), 2);
console.log(solve([4,1,1]), 2);
console.log(solve([8,2,8]), 9);
console.log(solve([8,1,4]), 5);
console.log(solve([7,4,10]), 10); 
console.log(solve([12,12,12]), 18); 
console.log(solve([1,23,2]), 3);
