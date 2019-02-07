// Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');

function humanReadable(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds = totalSeconds % 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const padNumber = (number) => {
    let numberString = number.toString();
    if (numberString.length == 1) {
      numberString = '0' + numberString;
    }
    return numberString;
  };

  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');