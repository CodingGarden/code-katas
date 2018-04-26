var fatFingers = function(str) {
  if (str == null) return null;
  if (str == '') return '';
  // a place to store the fat fingered string
  let fatFingered = '';
  // a place to store wether or not the current letter should be capitalized
    // initialize to false
  let capsLock = false;
  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    // if the current letter is an a or A
    if (letter == 'a' || letter == 'A') {
      // set capsLock to true
      capsLock = !capsLock;
    } else {
      // else append the current letter
        // append capitalized based on our boolean
      if (capsLock) {
        fatFingered += letter.toUpperCase();
      } else {
        fatFingered += letter;
      }
    }
  }

  // return the fat fingered string
  return fatFingered;
};

'BBbBB'

'BBbbB'

var fatFingers = function(str) {
  if (str == null) return null;
  if (!str) return null;
  return str.split('').reduce(({fatFingered, capsLock}, letter, index) => {
    if (letter == 'a' || letter == 'A') {
      capsLock = !capsLock;
    } else {
      if (capsLock) {
        fatFingered += letter.toUpperCase();
      } else {
        fatFingered += letter;
      }
    }
    if (index < str.length - 1) {
      return {fatFingered, capsLock};
    } else {
      return fatFingered;
    }
  }, { fatFingered: '', capsLock: false });
};


console.log(fatFingers("The quick brown fox jumps over the lazy dog.") ==  "The quick brown fox jumps over the lZY DOG.");
console.log(fatFingers("aAaaaaAaaaAAaAa") == "")
let result = fatFingers("The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness.");
console.log(result);
let answer = "The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS.";
console.log(answer);
console.log(result == answer);
