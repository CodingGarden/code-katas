function getAverage(marks) {
  // a place to store the sum, initialized to zero
  let sum = 0;
  // iterate over the marks
  for (let i = 0; i < marks.length; i += 1) {
    // add the current mark to the sum
    const mark = marks[i];
    // sum += mark;
    sum = sum + mark;
  }
  // return the sum divided by the number of marks
  return Math.floor(sum / marks.length);
}

function getAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i += 1) {
    const mark = marks[i];
    sum = sum + mark;
  }
  return Math.floor(sum / marks.length);
}

function getAverage(marks) {
  let sum = 0;
  marks.forEach((mark) => {
    sum += mark;
  });
  return Math.floor(sum / marks.length);
}

function getAverage(marks) {
  const sum = marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0);
  return Math.floor(sum / marks.length);
}

function getAverage(marks) {
  return Math.floor(marks.reduce((sum, mark) => {
    return sum + mark;
  }, 0) / marks.length);
}

function getAverage(marks) {
  return Math.floor(marks.reduce((sum, mark) => sum + mark) / marks.length);
}

function sumArray(arr, sum) {
  if (arr.length === 0) {
    return sum;
  }
  return sum + arr[0] + sumArray(arr.slice(1), sum);
} 



console.log(getAverage([2,2,2,2]), 2);
console.log(getAverage([1,2,3,4,5]), 3);
console.log(getAverage([1,1,1,1,1,1,1,2]), 1);
