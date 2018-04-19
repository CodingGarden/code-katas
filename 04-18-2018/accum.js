// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

function accum(input) {
  // a place to store the result
  let result = '';
  // iterate over the string
  for (let index = 0; index < input.length; index++) {
    const currentLetter = input[index];
    // append the current letter i+1 times to the string
    const totalCount = index + 1;
    for (let counter = 0; counter < totalCount; counter++) {
      // capitalize the first append
      if (counter == 0) {
        result += currentLetter.toUpperCase();
      } else {
        result += currentLetter.toLowerCase();
      }
    }

    // append a dash if it is not the last letter
    if (index != input.length - 1) {
      result += '-';
    }
  }

  return result;
}

// abc

function accum(input) {
  return input.split('').reduce((result, currentLetter, index) => {
    const totalCount = index + 1;
    for (let counter = 0; counter < totalCount; counter++) {
      if (counter == 0) {
        result += currentLetter.toUpperCase();
      } else {
        result += currentLetter.toLowerCase();
      }
    }

    if (index != input.length - 1) {
      result += '-';
    }
    return result;
  }, '');
}
