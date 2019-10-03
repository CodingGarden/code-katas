class Animal {
  constructor(name) {
    this.name = name;
    this.stomach = [];
  }

  eat(food) {
    this.stomach.push(food);
  }
}

function Animal(name) {
  this.name = name;
  this.stomach = [];
}

Animal.prototype.eat = function(food) {
  this.stomach.push(food)
}