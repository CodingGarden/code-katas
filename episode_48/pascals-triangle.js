function pascalsTriangle(n) {
  // a place to store the triangle (an array)
  const triangle = [];
  // iterate from 1 up to and including the number of rows (i)
  for (let i = 1; i <= n; i++) {
    // create an array for thr row
    const row = [];
    triangle.push(row);
    // iterate from 1 up to i (j)
    for (let j = 1; j <= i; j++) {
      // if j is 1 or i
      if (j === 1 || j === i) {
        // push 1 into row
        row.push(1);
      }
      else {
        // get the previous row value at j - 1
        const prevLeft = triangle[i - 2][j - 2];
        const prevRight = triangle[i - 2][j - 1];
        // get the preview row value at j
        // add them together and push into row
        row.push(prevLeft + prevRight);
      }
    }
  }
  return triangle.reduce((all, row) => all.concat(row), []);
}

// this only works up to length 4
function pascalsTriangle(length) {
  return Array
    .from({ length }, (_, i) => (11 ** i))
    .reduce((all, row) => all.concat([...row.toString()]), [])
    .map(Number);
}

compareLog(
  pascalsTriangle(1), [1]);
compareLog(
  pascalsTriangle(2), [1,1,1]);
compareLog(
  pascalsTriangle(4), [1,1,1,1,2,1,1,3,3,1]);
compareLog(
  pascalsTriangle(6), [1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1]);

function compareLog(arr1, arr2) {
  console.log(arr1.toString() == arr2.toString());
}