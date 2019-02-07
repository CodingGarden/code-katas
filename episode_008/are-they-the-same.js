function comp(array1, array2) {
  if (!array1 ||
      !array2 ||
      array1.length != array2.length) return false;

  // create an object where the keys are the squared values and the values are true
  const squaredValues = array2.reduce((values, value) => {
    values[value] = values[value] || 0;
    values[value]++;
    return values;
  }, {});
  
  // iterate over the first array
  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    const valueSqrd = value * value;
    // if the current value squared is not in the object
    if (!squaredValues[valueSqrd]) {
      return false;
    } else {
      squaredValues[valueSqrd]--;
    }
  }

  return true;
}

function comp(array1, array2) {
  if (!array1 ||
    !array2 ||
    array1.length != array2.length) return false;

  // create an object where the keys are the squared values and the values are true
  const squaredValues = array2.reduce((values, value) => {
    values[value] = values[value] || 0;
    values[value]++;
    return values;
  }, {});

  return array1.every(value => {
    const valueSqrd = value * value;
    if (!squaredValues[valueSqrd]) {
      return false;
    } else {
      squaredValues[valueSqrd]--;
      return true;
    }
  });
}

function comp(array1, array2) {
  if (!array1 ||
    !array2 ||
    array1.length != array2.length) return false;

  const sortNums = (a, b) => a - b;

  const valuesSquaredAndSorted = array1.sort(sortNums).map(v => v * v);
  const squaredSorted = array2.sort(sortNums);
  // return valuesSquaredAndSorted.every((value, index) => value == squaredSorted[index]);
  return valuesSquaredAndSorted.toString() == squaredSorted.toString();
}

const a1 = [88, 34, 66, 35, 7, 28, 83, 47];
const a2 = [7744, 1156, 4356, 1225, 49, 784, 6889, 2209];
console.log(comp(a1, a2), true);