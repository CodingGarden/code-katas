function checkExam(array1, array2) {
  // a place to store the score - initialized to zero
  // iterate up to the length of the first array
    // check if array2 value is blank
      // if it is - do nothing
      // else check if the value in array1 is equal to array2
      // if it is - increase the score by 4
      // if not - decrease score by 1
  // return the score
}

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i += 1) {
    if (array2[i] !== '') {
      if (array1[i] === array2[i]) {
        score += 4;
      } else {
        score -= 1;
      }
    }
  }
  if (score < 0) {
    return 0;
  }
  return score;
}

function checkExam(array1, array2) {
  let score = 0;
  array1.forEach((value, i) => {
    if (array2[i] !== '') {
      if (value === array2[i]) {
        score += 4;
      } else {
        score -= 1;
      }
    }
  });
  if (score < 0) {
    return 0;
  }
  return score;
}

function checkExam(array1, array2) {
  const score = array1.reduce((score, value, i) => {
    if (array2[i] !== '') {
      if (value === array2[i]) {
        return score + 4;
      } else {
        return score - 1;
      }
    }
    return score;
  }, 0);
  if (score < 0) {
    return 0;
  }
  return score;
}

function checkExam(array1, array2) {
  return Math.max(array1.reduce((score, value, i) => {
    if (!array2[i]) return score;
    if (value === array2[i]) {
      return score + 4;
    }
    return score - 1;
  }, 0), 0);
}

console.log(
  checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
console.log(
  checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b',  '']), 7);
console.log(
  checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
console.log(
  checkExam(['b', 'c', 'b', 'a'], ['',  'a', 'a', 'c']), 0);