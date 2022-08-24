function smallEnough(a, limit){
  // iterate over the array
    // if the current value is greater than the limit
    // return false
  // return true
}

function smallEnough(a, limit){
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > limit) {
      return false;
    }
  }
  return true;
}

function smallEnough(a, limit){
  let allUnderLimit = true;
  a.forEach((number) => {
    if (number > limit) {
      allUnderLimit = false;
    }
  });
  return allUnderLimit;
}

function smallEnough(a, limit){
  return a.reduce((allUnderLimit, number) => {
    if (number > limit) {
      return false;
    }
    return allUnderLimit;
  }, true);
}

function smallEnough(a, limit){
  return a.filter((number) => {
    return number > limit
  }).length === 0;
}

function smallEnough(a, limit){
  let i = 0;
  while (a[i] <= limit) {
      i++;
  }
  if (i === a.length) {
    return true;
  }
  return false;
}

function smallEnough(a, limit){
  return a.every((number) => number <= limit);
}


function smallEnough(a, limit){
  return !a.some((number) => number > limit);
}

Array.prototype.any = Array.prototype.some;

function smallEnough(a, limit){
  return !a.any((number) => number > limit);
}

console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);