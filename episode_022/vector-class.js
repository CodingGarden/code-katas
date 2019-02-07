class Vector {
  constructor(components) {
    this.components = components;
  }

  get length() {
    return this.components.length;
  }

  add(vector) {
    const func = (component, i) => component + vector.components[i];
    const components = this.mapComponents(vector, func);
    return new Vector(components);
  }

  subtract(vector) {
    const func = (component, i) => component - vector.components[i];
    const components = this.mapComponents(vector, func);
    return new Vector(components);
  }

  dot(vector) {
    const func = (component, i) => component * vector.components[i];
    const components = this.mapComponents(vector, func);
    return components.reduce((sum, component) => sum + component);
  }

  norm() {
    return Math.sqrt(this.components.reduce((sum, component) => {
      return sum + component * component;
    }, 0));
  }

  equals(vector) {
    return this.components.every((component, i) => component === vector.components[i]);
  }

  mapComponents(vector, func) {
    if (vector.length != this.length)
      throw new Error('Vectors must be the same length');
    const components = this
      .components
      .map(func);
    return components;
  }

  toString() {
    return `(${this.components})`;
  }
}

// const a = new Vector([1,2]);
// const b = new Vector([3,4]);

// console.log(a.add(b), new Vector([4,6]));

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

console.log(a.add(b), new Vector([4, 6, 8]));
console.log(a.subtract(b), new Vector([-2, -2, -2]));
console.log(a.dot(b), 26);
// should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm(), Math.sqrt(14));
// should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c);      // throws an error
console.log(a.toString());
