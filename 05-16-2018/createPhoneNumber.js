// (123) 456-7890

function createPhoneNumber(numbers) {
  let phoneNumber = '(';
  // append the first three numbers in the array
  phoneNumber += (numbers[0].toString() + numbers[1].toString() + numbers[2].toString());
  phoneNumber += ') ';
  // append the next three numbers in the array
  phoneNumber += (numbers[3].toString() + numbers[4].toString() + numbers[5].toString());
  phoneNumber += '-';
  // append the last four numbers in the array
  phoneNumber += (numbers[6].toString() + numbers[7].toString() + numbers[8].toString() + numbers[9].toString());

  // return phone number
  return phoneNumber;
}

function createPhoneNumber(numbers) {
  let phoneNumber = '(';
  // append the first three numbers in the array
  phoneNumber += '' + numbers[0] + numbers[1] + numbers[2];
  phoneNumber += ') ';
  // append the next three numbers in the array
  phoneNumber += '' + numbers[3] + numbers[4] + numbers[5];
  phoneNumber += '-';
  // append the last four numbers in the array
  phoneNumber += '' + numbers[6] + numbers[7] + numbers[8] + numbers[9];

  // return phone number
  return phoneNumber;
}

function createPhoneNumber(numbers) {
  let phoneNumber = '(';
  // append the first three numbers in the array
  phoneNumber += `${numbers[0]}${numbers[1]}${numbers[2]}`;
  phoneNumber += ') ';
  // append the next three numbers in the array
  phoneNumber += `${numbers[3]}${numbers[4]}${numbers[5]}`;
  phoneNumber += '-';
  // append the last four numbers in the array
  phoneNumber += `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  // return phone number
  return phoneNumber;
}

function createPhoneNumber(numbers) {
  const j = (n, b, e) => n.slice(b, e).join('');
  let phoneNumber = `(${j(numbers, 0, 3)}) ${j(numbers, 3, 7)}-${j(numbers ,7)}`;

  // return phone number
  return phoneNumber;
}

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/([\d]{3})([\d]{3})([\d]{4})/, '($1) $2-$3');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");