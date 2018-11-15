function trickOrTreat(children,candies){
  const hasBomb = bag => bag.some(item => item === 'bomb');
  if (children > candies.length || candies.some(hasBomb)) {
    return 'Trick or Treat!';
  }
  
  const numCandies = bag => bag.reduce((total, thing) => thing === 'candy' ? total + 1 : total, 0);
  const numCandiesInFirstBag = numCandies(candies[0]);
  if (numCandiesInFirstBag >= 2) {
    const allSameAmmountOfCandies = candies.every(bag => numCandies(bag) === numCandiesInFirstBag);
    if (allSameAmmountOfCandies) {
      return 'Thank you, strange uncle!';
    }
  }
  return 'Trick or Treat!';
}

console.log(
  trickOrTreat(3,[['candy','apple','candy'],['candy','candy'],['candy','candy']])
  , 'Thank you, strange uncle!');

console.log(
  trickOrTreat(3,[['candy','apple'],['apple','candy'],['candy','apple']])
  , 'Trick or treat!');

console.log(
  trickOrTreat(3,[['candy','apple','candy'],['candy','candy'],['candy','candy','candy']])
  , 'Trick or treat!');

console.log(
  trickOrTreat(3,[['candy','apple','candy'],['candy','candy']])
  , 'Trick or treat!');

console.log(
  trickOrTreat(3,[['candy','apple','candy'],['candy','candy'],['candy','bomb','candy']])
  , 'Trick or treat!');
