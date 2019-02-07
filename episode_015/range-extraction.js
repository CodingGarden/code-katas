function solution(list){
  // a place to store the ranges
  const ranges = [[list[0]]];
  // a place to store the current range start
  let currentRange = ranges[0];
  // iterate over the list
  for (let i = 1; i < list.length; i++) {
    const currentNumber = list[i];
    const lastValueInRange = currentRange[currentRange.length - 1];
    // if the current number in the range
    if (Math.abs(currentNumber - lastValueInRange) === 1) {
      // push into current range array
      currentRange.push(currentNumber);
    } else {
      // create new range array
      currentRange = [currentNumber];
      ranges.push(currentRange);
    }
  }

  return ranges.map(range => {
    if (range.length === 1) return '' + range[0];
    if (range.length === 2) return range.join(',');
    return '' + range[0] + '-' + range[range.length - 1];
  }).join(',');
}

function solution(list){
  const ranges = [[list[0]]];
  let currentRange = ranges[0];
  for (let i = 1; i < list.length; i++) {
    const currentNumber = list[i];
    const lastValueInRange = currentRange[currentRange.length - 1];
    if (Math.abs(currentNumber - lastValueInRange) === 1) {
      currentRange.push(currentNumber);
    } else {
      currentRange = [currentNumber];
      ranges.push(currentRange);
    }
  }

  return ranges.reduce((result, range) => {
    if (range.length === 1) return result + ',' + range[0];
    if (range.length === 2) return result + ',' + range.join(',');
    return result + ',' + range[0] + '-' + range[range.length - 1];
  }, '').slice(1);
}

function solution(list){
  return list.reduce((ranges, currentNumber) => {
    let currentRange = ranges[ranges.length - 1] || [];
    const lastValueInRange = currentRange[currentRange.length - 1];
    if (lastValueInRange !== undefined && Math.abs(currentNumber - lastValueInRange) === 1) {
      currentRange.push(currentNumber);
    } else {
      ranges.push([currentNumber]);
    }
    return ranges;
  }, []).reduce((result, range) => {
    if (range.length === 1) return result + ',' + range[0];
    if (range.length === 2) return result + ',' + range.join(',');
    return result + ',' + range[0] + '-' + range[range.length - 1];
  }, '').slice(1);
}

function solution(list){
  return list.reduce((ranges, currentNumber) => {
    let currentRange = ranges[ranges.length - 1] || [];
    const lastValueInRange = currentRange[currentRange.length - 1];
    if (lastValueInRange !== undefined && Math.abs(currentNumber - lastValueInRange) === 1) {
      currentRange.push(currentNumber);
    } else {
      ranges.push([currentNumber]);
    }
    return ranges;
  }, []).reduce((result, range) => {
    let rangeValue = '';
    if (range.length === 1) rangeValue = range[0];
    else if (range.length === 2) rangeValue = range.join(',');
    else rangeValue = range[0] + '-' + range[range.length - 1];
    return result ?  result + ',' + rangeValue : rangeValue;
  }, '');
}

function solution(list){
  return list.reduce((ranges, currentNumber) => {
    let currentRange = ranges[ranges.length - 1] || [];
    const lastValueInRange = currentRange[currentRange.length - 1];
    if (lastValueInRange !== undefined && Math.abs(currentNumber - lastValueInRange) === 1) {
      currentRange[1] = currentNumber;
    } else {
      ranges.push([currentNumber]);
    }
    return ranges;
  }, []).reduce((result, range) => {
    let rangeValue = '';
    if (range.length === 1) {
      rangeValue = range[0];
    } else if (Math.abs(range[0] - range[1]) >= 2) {
      rangeValue = range[0] + '-' + range[range.length - 1];
    } else {
      rangeValue = range.join(',');
    }
    return result ?  result + ',' + rangeValue : rangeValue;
  }, '');
}

// [[-6], [-3, -2, -1, 0, 1], [3, 4, 5], [7, 8, 9, 10, 11], [14, 15], [17, 18, 19, 20]]

const input = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
console.log(solution(input), '-6,-3-1,3-5,7-11,14,15,17-20');