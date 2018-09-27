function score( dice ) {
  const counts = dice.reduce((counts, roll) => {
    counts[roll] = counts[roll] || 0;
    counts[roll]++;
    return counts;
  }, {});

  const specialScoreValues = {
    1: 100,
    5: 50
  };

  return Object.keys(counts).reduce((score, roll) => {
    const count = counts[roll];
    if (count >= 3 && !specialScoreValues[roll]) {
      return score + (roll * 100)
    } else if (specialScoreValues[roll]) {
      const specialValue = specialScoreValues[roll];
      let specialScore;
      if (count < 3) {
        specialScore = specialValue * count;
      } else {
        specialScore = (specialValue * 10) + ((count - 3) * specialValue);
      }
      return score + specialScore;
    }
    return score;
  }, 0);  
}

// it( "should value this as worthless", function() {
  console.log( score( [2, 3, 4, 6, 2] ),   "Should be 0 :-(" );
// });

// it( "should value this triplet correctly", function() {
  console.log( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );
// });

// it( "should value this mixed set correctly", function() {
  console.log( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
// });

console.log( score( [1, 1, 1, 1, 1] ) == 1000, "Should be 1000" );