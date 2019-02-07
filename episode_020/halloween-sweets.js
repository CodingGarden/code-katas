function pick(bags, scale) {
  if (bags.length === 3) {
    const result = scale.weigh([bags[0]], [bags[1]]);
    if (result === 0) {
      return bags[2];
    } else if (result === -1) {
      return bags[0];
    } else {
      return bags[1];
    }
  }

  const groupOne = bags.slice(0, 3);
  const groupTwo = bags.slice(3, 6);
  const groupThree = bags.slice(6);

  const result = scale.weigh(groupOne, groupTwo);
  if (result === 0) {
    return pick(groupThree, scale);
  } else if (result === -1) {
    return pick(groupOne, scale);
  } else {
    return pick(groupTwo, scale);
  }
}

function pick(bags, scale) {
  if (bags.length === 3) {
    const result = scale.weigh([bags[0]], [bags[1]]);
    switch(result) {
      case 0:
        return bags[2];
      case -1:
        return bags[0];
      case 1:
        return bags[1]
    }
  }

  const groupOne = bags.slice(0, 3);
  const groupTwo = bags.slice(3, 6);
  const groupThree = bags.slice(6);

  const result = scale.weigh(groupOne, groupTwo);
  switch(result) {
    case 0:
      return pick(groupThree, scale);
    case -1:
      return pick(groupOne, scale);
    case 1:
      return pick(groupTwo, scale);
  }
}

function pick(bags, scale) {
  if (bags.length === 3) {
    return {
      '0': bags[2],
      '-1': bags[0],
      '1': bags[1]
    }[scale.weigh([bags[0]], [bags[1]])];
  }

  const groupOne = bags.slice(0, 3);
  const groupTwo = bags.slice(3, 6);
  const groupThree = bags.slice(6);

  return {
    '0': () => pick(groupThree, scale),
    '-1': () => pick(groupOne, scale),
    '1': () => pick(groupTwo, scale)
  }[scale.weigh(groupOne, groupTwo)]();
}

function pick(bags, scale) {
  return bags.length === 3
    ? {
      '0': bags[2],
      '-1': bags[0],
      '1': bags[1]
    }[scale.weigh([bags[0]], [bags[1]])]
    : {
      '0': () => pick(bags.slice(6), scale),
      '-1': () => pick(bags.slice(0, 3), scale),
      '1': () => pick(bags.slice(3, 6), scale)
    }[scale.weigh(bags.slice(0, 3), bags.slice(3, 6))]();
}

function pick(bags, scale) {
  return bags.length === 3 ? { '0': bags[2], '-1': bags[0], '1': bags[1] }[scale.weigh([bags[0]], [bags[1]])] : { '0': () => pick(bags.slice(6), scale), '-1': () => pick(bags.slice(0, 3), scale), '1': () => pick(bags.slice(3, 6), scale) }[scale.weigh(bags.slice(0, 3), bags.slice(3, 6))]();
}

function pick(bags,scale){return bags.length===3?{'0':bags[2],'-1':bags[0],'1':bags[1]}[scale.weigh([bags[0]],[bags[1]])]:{'0':()=>pick(bags.slice(6),scale),'-1':()=>pick(bags.slice(0,3),scale),'1':()=>pick(bags.slice(3,6),scale)}[scale.weigh(bags.slice(0,3),bags.slice(3,6))]()}
