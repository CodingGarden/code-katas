function parse(data) {
  let result = 0;
  let output = [];
  data.split('').forEach((operation) => {
    if (operation === 'i') {
      // i increments the value (initially 0)
      result += 1;
    } else if (operation === 'd') {
      // d decrements the value
      result -= 1;
    } else if (operation === 's') {
      // s squares the value
      result **= 2;
    } else if (operation === 'o') {
      // o outputs the value into the return array
      output.push(result);
    }
  });

  return output;
}

function parse(data) {
  return data.split('').reduce(({ result, output }, operation) => {
    if (operation === 'i') {
      // i increments the value (initially 0)
      result += 1;
    } else if (operation === 'd') {
      // d decrements the value
      result -= 1;
    } else if (operation === 's') {
      // s squares the value
      result **= 2;
    } else if (operation === 'o') {
      // o outputs the value into the return array
      output.push(result);
    }

    return { result, output };
  }, {
    result: 0,
    output: [],
  }).output;
}

console.log( parse('iiisdoso'), [ 8, 64 ] );
console.log( parse('iiisxxxdoso'), [ 8, 64 ] );