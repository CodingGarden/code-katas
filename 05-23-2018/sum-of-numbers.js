// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum(a, b) {
  // find lowest of a and b
  // find highest of a and b
  let begin;
  let end;
  if (a < b) {
    begin = a;
    end = b;
  } else {
    begin = b;
    end = a;
  }

  // place to store the sum
  let sum = 0;

  // iterate from the begin to the end
  for (let i = begin; i <= end; i++) {
    // add the current index to the sum
    sum += i;
  }
  // return sum
  return sum;
}

function GetSum(a, b) {
  let begin = Math.min(a, b);
  let end = Math.max(a, b);

  return new Array(Math.abs(end - begin) + 1).fill(0).reduce((sum, val, index) => {
    return sum + index + begin;
  }, 0);
}

console.log(GetSum(0, -1), -1);
console.log(GetSum(0, 1), 1);