// return true if s1 is a subset of s2
function isSubsetOf(s1, s2){
  // iterate over s1
  for (let item of s1) {
    // check if current value is in s2
    // if not
    if (!s2.has(item)) {
      return false;
    }
  }

  return true;
}

function isSubsetOf(s1, s2) {
  return [...s1].every(item => s2.has(item));
}

function isSubsetOf(s1, s2) {
  return Array.from(s1).every(item => s2.has(item));
}

// function isSubsetOf(s1, s2) {
//   return Array.prototype.every.call(s1, item => s2.has(item));
// }

function isSupersetOf(s1, s2){
  return isSubsetOf(s2, s1);
}


let A1 = new Set([1,2,3]), A2 = new Set([3,2,1]), B = new Set([1,2,3,4,5]), X = new Set([1,2,4,5,6,7]);

// console.log( isSubsetOf(A1,A1), 'A is contained in A' );
// console.log( isSubsetOf(A1,A2), '{1,2,3} is contained in {3,2,1}' );
// console.log( isSubsetOf(A1,B),  '{1,2,3} is contained in {1,2,3,4,5}' );
// console.log( isSubsetOf(A1,X), '{1,2,3} is not contained in {1,2,4,5,6,7}' );

console.log( isSupersetOf(A1,A1), 'A includes A' );
console.log( isSupersetOf(A1,A2), '{1,2,3} includes {3,2,1}' );
console.log( isSupersetOf(B,A1),  '{1,2,3} includes {1,2,3,4,5}' );
console.log( isSupersetOf(A1,X), '{1,2,3} doesnt include {1,2,4,5,6,7}' );
