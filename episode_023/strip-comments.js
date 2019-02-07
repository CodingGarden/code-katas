function solution(input, markers) {
  const regexp = '\\s*(' + markers.map(m => '\\' + m).join('|') + ')(.*)\\n?';
  return input.replace(new RegExp(regexp, 'g'), (match) => {
    return match.endsWith('\n') ? '\n' : '';
  });
}

console.log(solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']), 'apples, plums\npears\noranges');
console.log(solution('Q @b\nu\ne -e f g', ['@', '-']), 'Q\nu\ne');