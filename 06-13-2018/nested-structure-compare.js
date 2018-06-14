// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

function isArray(array) {
  return array.constructor === Array;
}

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.
Array.prototype.sameStructureAs = function (other) {
  if (!isArray(other)) return false;
  if (this.length != other.length) return false;

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const otherElement = other[i];
    if (isArray(element) && !element.sameStructureAs(otherElement)) {
      return false;
    } else if (!isArray(element) && isArray(otherElement)) {
      return false;
    }
  }

  return true;
};

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.
Array.prototype.sameStructureAs = function (other) {
  if (!isArray(other)) return false;
  if (this.length != other.length) return false;

  return this.every((element, i) => {
    const otherElement = other[i];
    if (isArray(element) && !element.sameStructureAs(otherElement)) {
      return false;
    } else if (!isArray(element) && isArray(otherElement)) {
      return false;
    }
    return true;
  });
};


console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] )); // true
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] )); // true 
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] )); // false
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] )); // false 