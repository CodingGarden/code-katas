function greet(name) {
  return 'Hello, ' + name + ' how are you doing today?';
}

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

function greet(name) {
  return ['Hello, ', name, ' how are you doing today?']
    .join('');
}

function greet(name) {
  return ['Hello, ', name, ' how are you doing today?']
    .reduce((result, part) => {
      return result + part; 
    }, '');
}


function greet(name) {
  return 'Hello, ' +
name +
' how are you doing today?';
}

function greet(name) {
  return `Hello,
  ${name} how are
   you doing 
   today?`;
}

console.log(
  greet('Ryan'),
  // 'Hello, Ryan how are you doing today?',
);
console.log(
  greet('Ed'),
  // 'Hello, Ed how are you doing today?',
);