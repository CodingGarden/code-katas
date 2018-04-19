//https://www.codewars.com/kata/students-final-grade

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) {
    return 100;
  }

  if (exam > 75 || projects > 5) {
    return 90;
  }

  if (exam > 50 || projects > 2) {
    return 75;
  }

  return 0;
}

console.log(finalGrade(100, 12) === 100);
console.log(finalGrade(85, 5) === 90);
