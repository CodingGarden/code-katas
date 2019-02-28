// {1,2,3,4,3,2,1}

function findEvenIndex(arr) {
  const sumSubArray = (arr, start, end) => {
    let sum = 0;
    for (let index = start; index < end; index++) {
      sum += arr[index];
    }
    return sum;
  };

  for (let index = 0; index < arr.length; index++) {
    const leftSum = sumSubArray(arr, 0, index);
    const rightSum = sumSubArray(arr, index + 1, arr.length);
    if (leftSum == rightSum) {
      return index;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");