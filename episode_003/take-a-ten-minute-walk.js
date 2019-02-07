function isValidWalk(walk) {
  // if length of array is not 10, immediately return false
  if (walk.length != 10) return false;

  // keep track of north count
  // keep track of south count
  // keep track of west count
  // keep track of east count
  const counts = {
    n: 0,
    e: 0,
    s: 0,
    w: 0
  };

  // iterate over walk
  for (let i = 0; i < walk.length; i++) {
    const direction = walk[i];
    // increase given direction count
    counts[direction]++;
  }

  // if north count - south count is 0
    // AND west count - east count is 0
  if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
    return true;
  } else {
    return false;
  }
}

function isValidWalk(walk) {
  if (walk.length != 10) return false;

  return walk.reduce((counts, direction, index) => {
    counts[direction]++;
    if (index < walk.length - 1) {
      return counts;
    } else if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
      return true;
    } else {
      return false;
    }
  }, {
    n: 0,
    e: 0,
    s: 0,
    w: 0
  });
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
