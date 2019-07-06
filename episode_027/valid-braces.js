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

console.log(validBraces( '()' ), true);
console.log(validBraces( '[(])' ), false);
console.log(validBraces('(){}[]'  ), true);
console.log(validBraces('([{}])'  ), true);
console.log(validBraces('(}'      ), false);
console.log(validBraces('[(])'    ), false);
console.log(validBraces('[({})](]'), false);
console.log(validBraces('}}]]))}])'), false);
