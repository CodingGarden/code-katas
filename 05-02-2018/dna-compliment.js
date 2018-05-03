// DNAStrand ("ATTGC") # return "TAACG"

// DNAStrand ("GTAT") # return "CATA"

// A and T
// C and G

function DNAStrand(dna){
  // place to store the compliment string
  let compliment = '';

  // iterate over dna
  for (let i = 0; i < dna.length; i++) {
    const currentLetter = dna[i];
    // if the current letter is an A, append a T
    if (currentLetter == 'A') {
      compliment += 'T';
    }
    // else if the current letter is a T, append an A
    else if (currentLetter == 'T') {
      compliment += 'A';
    }
    // else if the current letter is a C, append a G
    else if (currentLetter == 'C') {
      compliment += 'G';
    }
    // else if the current letter is a G, append a C
    else if (currentLetter == 'G') {
      compliment += 'C';
    }
  }

  // return compliment string
  return compliment;
}

// DNAStrand ("ATTGC") # return "TAACG"

// DNAStrand ("GTAT") # return "CATA"

// A and T
// C and G

function DNAStrand(dna){
  // place to store the compliment string
  let compliment = '';

  let compliments = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };

  // iterate over dna
  for (let i = 0; i < dna.length; i++) {
    const currentLetter = dna[i];
    compliment += compliments[currentLetter];
  }

  // return compliment string
  return compliment;
}

function DNAStrand(dna){
  let compliments = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };

  return dna.split('').map(letter => compliments[letter]).join('');
}
