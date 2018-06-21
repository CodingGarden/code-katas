function divisors(number) {
  // a place to store results
  const results = [];
  // iterate from 2 up to number - 1
  for (let i = 2; i < number; i++) {
    // is number divisible by the current value
    if (number % i == 0) {
      // push into result array
      results.push(i);
    }
  }

  // if result array is empty
  if (results.length == 0) {
    // return is prime
    return number + ' is prime';
  }
  // return the result array
  return results;
}

function divisors(number) {
  const results = Array.from({ length: number - 2 }).reduce((results, _, i) => {
    const value = i + 2;
    if (number % value == 0) {
      results.push(value);
    }
    return results;
  }, []);
  return results.length ? results : number + ' is prime';
}

console.log(divisors(9));

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");