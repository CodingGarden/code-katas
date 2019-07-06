function solution(str, ending){
  return str.endsWith(ending);
}

function solution(str, ending){
  return str.slice(-1 * ending.length) === ending;
}

function solution(str, ending){
  return str.substr(str.length - ending.length) === ending;
}

function solution(str, ending){
  return str.substring(str.length - ending.length, str.length) === ending;
}

function solution(str, ending){
  return str.slice(-ending.length) === ending;
}

console.log(solution('abcde', 'cde'), true);
console.log(solution('abcde', 'abc'), false);