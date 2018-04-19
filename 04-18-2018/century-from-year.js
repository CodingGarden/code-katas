// https://www.codewars.com/kata/century-from-year

function century(year) {
  const century = Math.floor(year / 100);
  const decade = year % 100;

  if (decade > 0) {
    return century + 1;
  }

  return century;
}
