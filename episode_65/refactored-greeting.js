// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet(yourName){
//     return 'Hello ' + yourName + ', my name is ' + this.name;
//   }
// }

function Person(name) {
  this.name = name;
  // this.greet = function(yourName){
  //   return 'Hello ' + yourName + ', my name is ' + this.name;
  // };
}

Person.prototype.greet = function(yourName){
  return 'Hello ' + yourName + ', my name is ' + this.name;
};

const joe = new Person('Joe');
console.log(joe.greet('Kate'), 'Hello Kate, my name is Joe');
console.log(joe.name, 'Joe');
const cj = new Person('CJ');
console.log(cj.greet('willm62'));
console.log(cj.greet.call({ name: 'banana' }, 'xZYNKxCOMMANDO'));
console.log(cj.greet.apply({ name: 'banana' }, ['xZYNKxCOMMANDO']));
const bananaGreeter = cj.greet.bind({ name: 'banana' });

console.log(bananaGreeter('wow'));
