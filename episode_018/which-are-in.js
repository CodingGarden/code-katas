function inArray(array1,array2){
  // a place to store the results
  const results = [];
  // iterate over array2
  array2.forEach(word => {
    // iterate over array1
    array1.forEach(ending => {
      // if the current word ends with something in array1
      if (word.includes(ending)) {
        // push into results
        results.push(ending);
      }
    })
  });

  return [...new Set(results)].sort();
}

function inArray(array1,array2){
  const results = [];
  array2.forEach(word => {
    array1.forEach((ending, i) => {
      if (word.includes(ending)) {
        array1.splice(i, 1);
        results.push(ending);
      }
    })
  });

  return results.sort();
}

function inArray(array1,array2){
  const results = [];
  array2.forEach(word => {
    for (let i = array1.length - 1; i >= 0; i--) {
      const ending = array1[i];
      if (word.includes(ending)) {
        array1.splice(i, 1);
        results.push(ending);
        break;
      }
    }
  });

  return results.sort();
}
function inArray(array1,array2){
  return array1.filter(ending => {
    return array2.some(word => word.includes(ending));
  }).sort();
}

// Alca???
// function inArray(array1,array2) {
//   return array2.filter(ending => new RegExp(array1.join('|')).test(n))
// }

let a1 = ["xyz", "live", "strong"]
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])