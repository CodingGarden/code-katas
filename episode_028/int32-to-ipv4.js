function int32ToIp(int32){
  // convert to binary
    // pad with zeros to 32 bits
  const binaryString = int32.toString(2).padStart(32, '0');
  // split every 8 bits
  const firstOctet = binaryString.slice(0, 8);
  const secondOctet = binaryString.slice(8, 16);
  const thirdOctect = binaryString.slice(16, 24);
  const fourthOctet = binaryString.slice(24, 32);
  // covert each 8 bits to decimal
  console.log(parseInt(firstOctet, 2));
  
  return `${parseInt(firstOctet, 2)}.${parseInt(secondOctet, 2)}.${parseInt(thirdOctect, 2)}.${parseInt(fourthOctet, 2)}`;
}

function int32ToIp(int32){
  const binaryString = int32.toString(2).padStart(32, '0');
  const octets = [];
  for (let i = 0; i <= 24; i+=8) {
    octets.push(parseInt(binaryString.slice(i, i + 8), 2));
  }
  return octets.join('.');
}

function int32ToIp(int32){
  return int32.toString(2).padStart(32, '0')
    .split('').reduce(([currentOctet, fullIp], currentDigit) => {
      currentOctet = currentOctet + currentDigit;
      if (currentOctet.length === 8) {
        fullIp += parseInt(currentOctet, 2) + ('.');
        currentOctet = '';
      }
      return [currentOctet, fullIp];
    }, ['', ''])[1].slice(0, -1);
}

function int32ToIp(int32) {
  return int32.toString(2).padStart(32, 0).match(/\d{8}/g).map(n => parseInt(n, 2)).join('.');
}

function int2ip (in2IP) {
  return ( (in2IP>>>24) +'.' + (in2IP>>16 & 255) +'.' + (in2IP>>8 & 255) +'.' + (in2IP & 255) );
}

console.log(int32ToIp(2154959208), '128.114.17.104');
console.log(int32ToIp(0), '0.0.0.0');
console.log(int32ToIp(2149583361), '128.32.10.1');