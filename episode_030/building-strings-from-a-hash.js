function solution(pairs){
  // a place to store the result
  let result = '';
  // iterate over the keys of the object
  for (const key in pairs) {
    // append to the result: 
    // the current key = the value at the current key,
    result += `${key} = ${pairs[key]},`;
  }
  return result.slice(0, -1);
}

function solution(pairs){
  let result = '';
  Object.keys(pairs).forEach((key, i, keys) => {
    result += `${key} = ${pairs[key]}`;
    if (i !== keys.length - 1) {
      result += ',';
    }
  });
  return result;
}

function solution(pairs){
  return Object.keys(pairs)
    .reduce((result, key, i, keys) => {
      result += `${key} = ${pairs[key]}`;
      if (i !== keys.length - 1) {
        result += ',';
      }
      return result;
    }, '');
}

// Mertcan
// I like adding the results to an array and using join() on comma

function solution(pairs){
  const result = [];
  for (const key in pairs) {
    result.push(`${key} = ${pairs[key]}`);
  }
  return result.join(',');
}

function solution(pairs){
  return Object.keys(pairs)
    .map((key) => {
      return `${key} = ${pairs[key]}`;
    }).join(',');
}

// Nesci
// Json stringify + regex

function solution(pairs){
  const jsonString = JSON.stringify(pairs);
  // console.log(jsonString);
  
  // return jsonString.replace(/":/g, ' = ').replace(/,"/g, ',');
  
}

// andrew lane
function soluction(x) {
  return Object.keys(x)
    .reduce((y, z) => [...y, `${z} = ${x[z]}`], []).join(',');
}

console.log(solution({a: 1, b: '2'}), 'a = 1,b = 2');



// SHORT BREAK! I'll be right back! Vote for the next kata above.