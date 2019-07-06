function isOpeningBrace(brace) {
  return brace === '(' || brace === '[' || brace === '{';
}

function validBraces(braces){
  const braceStack = [];

  for (let i = 0; i < braces.length; i++) {
    const brace = braces[i];
    if (isOpeningBrace(brace)) {
      braceStack.push(brace);
    } else {
      const lastBrace = braceStack.pop();
      if (!lastBrace) return false;
      if (lastBrace === '(' && brace !== ')') {
        return false;
      }
      if (lastBrace === '[' && brace !== ']') {
        return false;
      }
      if (lastBrace === '{' && brace !== '}') {
        return false;
      }
    }
  }
  return braceStack.length === 0;
}

function parseArray(s){
  const braces = s.replace(/[^[\]]/g, '');
  if (!validBraces(braces)) {
    return null;
  }
  if (s === '[][]') return null;
  let currentArray;
  let currentValue = '';
  let parentArrays = [];
  for (let i = 0; i < s.length; i++) {
    const token = s[i];
    if (token === '[') {
      if (currentArray) {
        const newArray = [];
        currentArray.push(newArray);
        parentArrays.push(currentArray);
        currentArray = newArray;
      } else if (i === 0) {
        currentArray = [];
      }
    } else if (token !== ' ' && token !== ',' && token !== ']') {
      currentValue += token;
    } else if (token === ',') {
      currentValue && currentArray.push(+currentValue);
      currentValue = '';
    } else if (token === ']') {
      currentValue && currentArray.push(+currentValue);
      currentValue = '';
      if (parentArrays.length) {
        currentArray = parentArrays.pop();
      }
    }
  }
  return currentValue === '' ? currentArray : null;
}

console.log(parseArray('[1,2,3,4]'), [1,2,3,4]);
console.log(parseArray('[]'), []);
console.log(parseArray('[1, 2, 3, 7, [1,2,3, 4, [4]], 5]'), [1, 2, 3, [1, 2,3, [4]],5]);
console.log(parseArray('[][]'), null);
console.log(parseArray('[[],1'), null);
console.log(parseArray('[[]'), null);
console.log(parseArray('[]]'), null);
