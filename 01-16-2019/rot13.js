function rot13(str) {
  // a place to store the deciphered text
  let deciphered = '';
  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    const charCode = str.charCodeAt(i);
    // if the current value is a character
    if (charCode >= 65 && charCode <= 90) {
      const cipherCode = (((charCode - 65) + 13) % 26) + 65;
      deciphered += String.fromCharCode(cipherCode);
    } else if (charCode >= 97 && charCode <= 122) {
      const cipherCode = (((charCode - 97) + 13) % 26) + 97;
      deciphered += String.fromCharCode(cipherCode);
    } else {
      deciphered += value;
    }
  }
  
  return deciphered;
}

function rot13(str) {
  return Array.prototype.reduce.call(str, (deciphered, value, i) => {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      const cipherCode = (((charCode - 65) + 13) % 26) + 65;
      return deciphered + String.fromCharCode(cipherCode);
    } else if (charCode >= 97 && charCode <= 122) {
      const cipherCode = (((charCode - 97) + 13) % 26) + 97;
      return deciphered + String.fromCharCode(cipherCode);
    } else {
      return deciphered + value;
    }
  }, '');
}

function rot13(str) {
  return Array.prototype.reduce.call(str, (deciphered, value, i) => {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      if (charCode < 65 + 13) {
        return deciphered + String.fromCharCode(charCode + 13);
      } else {
        return deciphered + String.fromCharCode(charCode - 13);
      }
    } else if (charCode >= 97 && charCode <= 122) {
      if (charCode < 97 + 13) {
        return deciphered + String.fromCharCode(charCode + 13);
      } else {
        return deciphered + String.fromCharCode(charCode - 13);
      }
    } else {
      return deciphered + value;
    }
  }, '');
}

function rot13(str) {
  return Array.prototype.reduce.call(str, (deciphered, value, i) => {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      if (value < 'M') {
        return deciphered + String.fromCharCode(charCode + 13);
      } else {
        return deciphered + String.fromCharCode(charCode - 13);
      }
    } else if (charCode >= 97 && charCode <= 122) {
      if (value < 'm') {
        return deciphered + String.fromCharCode(charCode + 13);
      } else {
        return deciphered + String.fromCharCode(charCode - 13);
      }
    } else {
      return deciphered + value;
    }
  }, '');
}

// ALCA! 🎉
function rot13(s) {
  return s.replace(/[a-zA-Z]/g, (m, _, __, c = m.charCodeAt(0), o = c >= 97 ? 97 : 65) => String.fromCharCode(o + (c - o + 13) % 26));
}

console.log(rot13('EBG13 rknzcyr.'), 'ROT13 example.');
console.log(rot13('This is my first ROT13 excercise!'), 'Guvf vf zl svefg EBG13 rkprepvfr!');