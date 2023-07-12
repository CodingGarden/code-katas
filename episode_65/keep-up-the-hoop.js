function hoopCount(n) {
  if (n >= 10) {
    return 'Great, now move on to tricks';
  } else {
    return 'Keep at it until you get it';
  }
}

function hoopCount(n) {
  if (n >= 10) {
    return 'Great, now move on to tricks';
  }
  return 'Keep at it until you get it';
}

function hoopCount(n) {
  if (n < 10) {
    return 'Keep at it until you get it';
  }
  return 'Great, now move on to tricks';
}

function hoopCount(n) {
  return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
}

function hoopCount(n) {
  return n >= 10
    ? 'Great, now move on to tricks'
    : 'Keep at it until you get it';
}

function hoopCount(n) {
  let result = 'Great, now move on to tricks';
  if (n < 10) {
    result = 'Keep at it until you get it';
  }
  return result;
}

function hoopCount(n) {
  return {
    'true': 'Great, now move on to tricks',
    'false': 'Keep at it until you get it'
  }[n >= 10];
}

function hoopCount(n) {
  return {
    'false': 'Great, now move on to tricks',
    'true': 'Keep at it until you get it'
  }[n < 10];
}

function hoopCount(n) {
  return [
    'Keep at it until you get it',
    'Great, now move on to tricks',
  ][Number(n >= 10)];
}

function hoopCount(n) {
  return [
    'Keep at it until you get it',
    'Great, now move on to tricks',
  ][+(n >= 10)];
}

function hoopCount(n) {
  if (n in [0,1,2,3,4,5,6,7,8,9]) {
    return 'Keep at it until you get it';
  }
  return 'Great, now move on to tricks';
}
// joshwashywash

// an array of [string1, string2] and then use the comparison casted to an index

function hoopCount(n) {
  return 'Keep at it until you get it::Great, now move on to tricks'
    .split('::')[+(n >= 10)];
}

function hoopCount(n) {
  if ([0,1,2,3,4,5,6,7,8,9].includes(n)) {
    return 'Keep at it until you get it';
  }
  return 'Great, now move on to tricks';
}

console.log(hoopCount(3), 'Keep at it until you get it');
console.log(hoopCount(11), 'Great, now move on to tricks');
