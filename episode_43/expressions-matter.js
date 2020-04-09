function expressionMatter(a, b, c) {
  const answer1 = a * (b + c);
  const answer2 = a * b * c;
  const answer3 = a + b * c;
  const answer4 = (a + b) * c;
  const answer5 = a * b + c;
  const answer6 = a + b + c;

  return Math.max(answer1, answer2, answer3, answer4, answer5, answer6);
}

function expressionMatter(a, b, c) {
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;

  const answer1 = add(a, add(b, c));
  const answer2 = add(a, multiply(b, c));
  const answer3 = multiply(a, add(b, c));
  const answer4 = multiply(a, multiply(b, c));

  const answer5 = multiply(add(a, b), c);
  const answer6 = multiply(multiply(a, b), c);
  const answer7 = add(add(a, b), c);
  const answer8 = add(multiply(a, b), c);

  return Math.max(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8);
}

function expressionMatter(a, b, c) {
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;

  const answers = [];
  const fns = [add, multiply];
  fns.forEach(fn1 => {
    fns.forEach(fn2 => {
      answers.push(fn1(a, fn2(b, c)));
      answers.push(fn1(fn2(a, b), c));
    });
  });

  return Math.max(...answers);
}

function expressionMatter(a, b, c) {
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;

  let highest = 0;
  const fns = [add, multiply];
  fns.forEach(fn1 => {
    fns.forEach(fn2 => {
      const answer1 = fn1(a, fn2(b, c));
      if (answer1 > highest) {
        highest = answer1;
      }
      const answer2 = fn1(fn2(a, b), c);
      if (answer2 > highest) {
        highest = answer2;
      }
    });
  });

  return highest;
}

function expressionMatter(a, b, c) {
  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;

  let highest = 0;
  const fns = [add, multiply];
  fns.forEach(fn1 => {
    fns.forEach(fn2 => {
      const answer1 = fn1(a, fn2(b, c));
      const answer2 = fn1(fn2(a, b), c);
      highest = Math.max(highest, answer1, answer2);
    });
  });

  return highest;
}

describe("Small values", function() {
  console.log(expressionMatter(2, 1, 2), 6);
  console.log(expressionMatter(2, 1, 1), 4);
  console.log(expressionMatter(1, 1, 1), 3);
  console.log(expressionMatter(1, 2, 3), 9);
  console.log(expressionMatter(1, 3, 1), 5);
  console.log(expressionMatter(2, 2, 2), 8);
});

describe("Medium values", function() {
  console.log(expressionMatter(5, 1, 3), 20);
  console.log(expressionMatter(3, 5, 7), 105);
  console.log(expressionMatter(5, 6, 1), 35);
  console.log(expressionMatter(1, 6, 1), 8);
  console.log(expressionMatter(2, 6, 1), 14);
  console.log(expressionMatter(6, 7, 1), 48);
});

describe("Mixed values", function() {
  console.log(expressionMatter(2, 10, 3), 60);
  console.log(expressionMatter(1, 8, 3), 27);
  console.log(expressionMatter(9, 7, 2), 126);
  console.log(expressionMatter(1, 1, 10), 20);
  console.log(expressionMatter(9, 1, 1), 18);
  console.log(expressionMatter(10, 5, 6), 300);
  console.log(expressionMatter(1, 10, 1), 12);
});

function describe(description, cb) {
  cb();
}