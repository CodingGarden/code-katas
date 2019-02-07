// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

const withinRange = value => value < 0 ? 0 : value > 255 ? 255 : value;
const toHex = value => pad(value.toString(16).toUpperCase());
const pad = value => value.length === 1 ? '0' + value : value;
const convert = value => toHex(withinRange(value));

function rgb(r, g, b) {
  return `${convert(r)}${convert(g)}${convert(b)}`;
}

console.log(rgb(255, 255, 255), 'FFFFFF');
console.log(rgb(0, 0, 0), '000000');
