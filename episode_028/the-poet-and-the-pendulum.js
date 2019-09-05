function pendulum(values) {
  // sort the incoming values least to greatest
  values.sort((a, b) =>  a - b);
  // a place to store the pendulum array
  const result = [values[0]];
  // a variable to keep track of right or left
  let right = true;

  // iterate over sorted values
  for (let i = 1; i < values.length; i++) {
    const value = values[i];
    // if should go on the right
    if (right) {
      // push into array
      result.push(value);
    } else {
      // insert into beginning of array
      result.unshift(value);
    }
    // flip tracker variable
    right = !right;
  }

  return result;
}

function pendulum(values) {
  values.sort((a, b) =>  a - b);
  const result = [values[0]];
  let right = true;

  values.slice(1).forEach(value => {
    if (right) {
      result.push(value);
    } else {
      result.unshift(value);
    }
    right = !right;
  });

  return result;
}

function pendulum(values) {
  values.sort((a, b) =>  a - b);
  const result = [values.shift()];
  let right = true;

  values.forEach(value => {
    if (right) {
      result.push(value);
    } else {
      result.unshift(value);
    }
    right = !right;
  });

  return result;
}

function pendulum(values) {
  values.sort((a, b) =>  b - a);
  const result = [values.pop()];
  let right = true;

  for (let i = values.length - 1; i >= 0; i--) {
    if (right) {
      result.push(values.pop());
    } else {
      result.unshift(values.pop());
    }
    right = !right;
  }

  return result;
}

function pendulum(values, right = true) {
  return values.sort((a, b) =>  b - a)
    .reduceRight((result) => {
      if (right) {
        result.push(values.pop());
      } else {
        result.unshift(values.pop());
      }
      right = !right;
      return result;
    }, [values.pop()]);
}

function pendulum(values, results = [ values.sort((a, b) => a - b).shift() ]) {
  return (values.forEach((value, i) => results[i % 2 ? 'unshift' : 'push'](value)), results);
}

function pendulum(values, right = true) {
  return values.sort((a, b) =>  b - a)
    .reduceRight((result) => {
      result[right ? 'push' : 'unshift'](values.pop());
      right = !right;
      return result;
    }, [values.pop()]);
}

function pendulum(values, right = true) {
  return values.sort((a, b) =>  b - a)
    .reduceRight((result) => {
      result[!(right = !right) ? 'push' : 'unshift'](values.pop());
      return result;
    }, [values.pop()]);
}

function pendulum(values, right = true) {
  return values.sort((a, b) =>  b - a)
    .reduceRight((result) => {
      return (result[!(right = !right) ? 'push' : 'unshift'](values.pop()), result);
    }, [values.pop()]);
}

console.log(pendulum([4,10,9]), [10,4,9]);
console.log(pendulum([8,7,10,3]), [8,3,7,10]);
// console.log(pendulum([6,6,8,5,10]), [10,6,5,6,8]);
// console.log(pendulum([9,4,6,4,10,5]), [9,5,4,4,6,10]);
// console.log(pendulum([4,6,8,7,5]), [8,6,4,5,7]);
// console.log(pendulum([10,5,6,10]), [10,5,6,10]);
// console.log(pendulum([11,12,12]), [12,11,12]);