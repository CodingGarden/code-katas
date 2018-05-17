// return masked string
function maskify(cc) {
  // a place to store the masked number
  let masked = '';

  // iterate over the string in reverse
  for (let i = cc.length - 1; i >= 0; i--) {
    const letter = cc[i];
    // if the current index is greater than length - 4
    if (i > cc.length - 5) {
      // append the letter to the masked number
      masked = letter + masked;
    } else {
      // else
      // append a #
      masked = '#' + masked;
    }
  }

  // return the masked number
  return masked;
}

// return masked string
function maskify(cc) {
  // a place to store the masked number
  let masked = '';

  // iterate over the string in reverse
  for (let i = 0; i < cc.length; i++) {
    const letter = cc[i];
    // if the current index is greater than length - 4
    if (i < cc.length - 4) {
      // append the letter to the masked number
      masked += '#';
    } else {
      // else
      // append a #
      masked += letter;
    }
  }

  // return the masked number
  return masked;
}

function maskify(cc) {
  return cc.split('').map((letter, index, array) => {
    if (index < array.length - 4) {
      return '#';
    } else {
      return letter;
    }
  }).join('');
}