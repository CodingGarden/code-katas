function fixTheMeerkat(arr) {
  // a variable to hold the tail - index 0
  const tail = arr[0];
  // a variable to hold the body - index 1
  const body = arr[1];
  // a variable to hold the head - index 2
  const head = arr[2];

  return [head, body, tail];
}

function fixTheMeerkat(arr) {
  const [tail, body, head] = arr;
  return [head, body, tail];
}

function fixTheMeerkat(arr) {
  const tail = arr.shift();
  const head = arr.pop();
  arr.unshift(head);
  arr.push(tail);
  return arr;
}

function fixTheMeerkat(arr) {
  return arr.reverse();
}

function fixTheMeerkat([tail, body, head]) {
  return [head, body, tail];
}

// const fixTheMeerkat = ([tail, body, head]) => [head, body, tail];

console.log(fixTheMeerkat(['tail', 'body', 'head']), ['head', 'body', 'tail']);
console.log(fixTheMeerkat(['tails', 'body', 'heads']), ['heads', 'body', 'tails']);
console.log(fixTheMeerkat(['bottom', 'middle', 'top']), ['top', 'middle', 'bottom']);
console.log(fixTheMeerkat(['lower legs', 'torso', 'upper legs']), ['upper legs', 'torso', 'lower legs']);
console.log(fixTheMeerkat(['ground', 'rainbow', 'sky']), ['sky', 'rainbow', 'ground']);
