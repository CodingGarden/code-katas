function isValidIP(str) {
  // split string on period
  const octets = str.split('.');
  // if length is not 4
  if (octets.length !== 4) {
    return false;
  }

  // iterate over octets
  for (let i = 0; i < octets.length; i++) {
    const value = octets[i];
    // if current value is not between 0 - 255
    if (!value.match(/^\d+$/)) {
      return false;
    } else if (value < 0 || value > 255) {
      return false;
    } else if (value.length > 1 && value[0] === '0') {
      return false;
    }
  }
  
  return true;
}

function isValidIP(str) {
  // split string on period
  const octets = str.split('.');
  // if length is not 4
  if (octets.length !== 4) {
    return false;
  }

  // iterate over octets
  return octets.every((value) => {
    if (!value.match(/^\d+$/)) {
      return false;
    } else if (value < 0 || value > 255) {
      return false;
    } else if (value.length > 1 && value[0] === '0') {
      return false;
    }
    
    return true;
  });
}

function isValidIP(str) {
  // split string on period
  const octets = str.split('.');
  // if length is not 4
  if (octets.length !== 4) {
    return false;
  }

  // iterate over octets
  return !octets.some((value) => {
    return !value.match(/^\d+$/) || (value < 0 || value > 255) || (value.length > 1 && value[0] === '0');
  });
}

// meiamsome

const isValidIP = str => str.match(/^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/) ? true : false

console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.10.56.1"), true);
console.log(isValidIP("137.255.156.100"), true);

console.log(isValidIP(''), false);
console.log(isValidIP('abc.def.ghi.jkl'), false);
console.log(isValidIP('123.456.789.0'), false);
console.log(isValidIP('12.34.56'), false);
console.log(isValidIP('01.02.03.04'), false);
console.log(isValidIP('256.1.2.3'), false);
console.log(isValidIP('1.2.3.4.5'), false);
console.log(isValidIP('123,45,67,89'), false);
console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
console.log(isValidIP(' 1.2.3.4'), false);
console.log(isValidIP('1.2.3.4 '), false);
console.log(isValidIP('12.34.56.-7'), false);
console.log(isValidIP('1.2.3.4\n'), false);
console.log(isValidIP('\n1.2.3.4'), false);