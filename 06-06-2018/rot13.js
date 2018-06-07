function rot13(message) {
  // 65 - 90 uppercase letters
  // 97 - 122 lowercase letters
  // place to store the encoded string
  let encoded = '';

  // iterate over the message
  for (let i = 0; i < message.length; i++) {
    // get the char code for the current letter
    const letter = message[i];
    const charCode = message.charCodeAt(i);
    // if it is within either range - shift by 13
    if (charCode >= 65 && charCode <= 90) {
      // append shifted letter to the encoded string
      let newCharCode = charCode + 13;
      if (newCharCode > 90) {
        newCharCode = 64 + (newCharCode - 90);
      }
      encoded += String.fromCharCode(newCharCode);
    } else if (charCode >= 97 && charCode <= 122) {
      // append shifted letter to the encoded string
      let newCharCode = charCode + 13;
      if (newCharCode > 122) {
        newCharCode = 96 + (newCharCode - 122);
      }
      encoded += String.fromCharCode(newCharCode);
    } else {
      // aappend current letter to encoded
      encoded += letter;
    }
  }

  return encoded;
}

function rot13(message) {
  let encoded = '';

  const jt = (code, minValue) => (code - minValue + 12) % 26 + minValue + 1;

  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    const charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encoded += String.fromCharCode(jt(charCode, 66));
    } else if (charCode >= 97 && charCode <= 122) {
      encoded += String.fromCharCode(jt(charCode, 97));
    } else {
      encoded += letter;
    }
  }
  return encoded;
}

console.log(rot13('grfg'), 'test');
console.log(rot13('Grfg'), 'Test');