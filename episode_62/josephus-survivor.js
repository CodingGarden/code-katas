// function josephusSurvivor(n, k){
//   const people = Array.from({ length: n }, (_, i) => i + 1);
//   let index = k - 1;
//   let count = 0;
//   while (people.length > 1) {
//     people.splice(index % people.length, 1);
//     count += 1;
//     index += (k - 1) - count;
//   }
//   return people[0];
// }

function josephusSurvivor(n, k){
  const people = Array.from({ length: n }, (_, i) => i + 1);
  let removed = 0;
  let index = (k - 1);
  while(removed < n - 1) {
    people[index % people.length] = 0;
    index += (k - 1) + 1;
    while (people[index % people.length] === 0) {
      index++;
    }
    removed += 1;
    console.log(people);
  }
  return people.find((person) => person != 0);
}

console.log(josephusSurvivor(7,3),4)
// console.log(josephusSurvivor(11,19),10)
// console.log(josephusSurvivor(1,300),1)
// console.log(josephusSurvivor(14,2),13)
// console.log(josephusSurvivor(100,1),100)