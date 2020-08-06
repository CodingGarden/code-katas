/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
class List {
  constructor(fnGenerator, start = 0, end = Infinity) {
    this.fnGenerator = fnGenerator;
    this.generator = fnGenerator();
    this.start = start;
    this.end = end;
  }

  static get empty() {
    return List.fromList([]);
  }

  static fromList(data) {
    function* listFn() {
      yield* data;
    }
    return new List(listFn);
  }

  static repeat(value) {
    function* repeaterFn() {
      while (true) {
        yield value;
      }
    }
    return new List(repeaterFn);
  }

  static iterate(fn, start) {
    function* iteratorFn() {
      let current = start;
      while (true) {
        yield current;
        current = fn(current);
      }
    }
    return new List(iteratorFn);
  }

  static cycle(list) {
    function* cyclerFn() {
      while (true) {
        list.generator = list.fnGenerator();
        yield* list.generator;
      }
    }
    return new List(cyclerFn);
  }

  static replicate(count, value) {
    return List.repeat(value).take(count);
  }

  static get FIB() {
    function* fibGenerator() {
      let prevValue = 0;
      let currentValue = 1;
      yield prevValue;
      yield currentValue;
      while (true) {
        [prevValue, currentValue] = [currentValue, currentValue + prevValue];
        yield currentValue;
      }
    }
    return new List(fibGenerator);
  }

  take(count) {
    return new List(this.fnGenerator, 0, count);
  }

  head() {
    return this.generator.next().value;
  }

  tail() {
    return new List(this.fnGenerator, this.start + 1, this.end);
  }

  get(index) {
    let count = 0;
    const generator = this.entries();
    for (const value of generator) {
      if (count === index) return value;
      count += 1;
    }
    return undefined;
  }

  length() {
    let count = 0;
    const generator = this.entries();
    while (!generator.next().done) {
      count += 1;
    }
    return count;
  }

  drop(count) {
    return new List(this.fnGenerator, count, this.end);
  }

  nil() {
    return this.length() === 0;
  }

  map(mapFn) {
    function* mapGenerator() {
      for (const value of this.entries()) {
        yield mapFn(value);
      }
    }
    return new List(mapGenerator.bind(this), this.start, this.end);
  }

  filter(predicate) {
    function* filterGenerator() {
      for (const value of this.entries()) {
        if (predicate(value)) yield value;
      }
    }
    return new List(filterGenerator.bind(this), this.start, this.end);
  }

  reverse() {
    return List.fromList(this.toList().reverse());
  }

  concat() {
    function* concatGenerator() {
      for (const list of this.entries()) {
        yield* list.entries();
      }
    }
    return new List(concatGenerator.bind(this), this.start, this.end);
  }

  zipWith(zipFn, list) {
    function* zipGenerator() {
      const leftGenerator = this.fnGenerator();
      const rightGenerator = list.fnGenerator();
      while (true) {
        const leftValue = leftGenerator.next();
        if (leftValue.done) break;
        const rightValue = rightGenerator.next();
        if (rightValue.done) break;
        yield zipFn(leftValue.value, rightValue.value);
      }
    }
    return new List(zipGenerator.bind(this), this.start, this.end);
  }

  foldl(foldFn, initialValue) {
    let result = initialValue;
    for (const value of this.entries()) {
      result = foldFn(result, value);
    }
    return result;
  }

  elem(findValue) {
    for (const value of this.entries()) {
      if (value === findValue) return true;
    }
    return false;
  }

  cons(value) {
    function* listFn() {
      yield value;
      yield* this.entries();
    }
    return new List(listFn.bind(this), this.start, this.end);
  }

  append(list) {
    function* listFn() {
      yield* list.entries();
      yield* this.entries();
    }
    return new List(listFn.bind(this));
  }

  // btw random idea: rename this.entries() to this[Symbol.iterator] and you can remove all the .entries() everywhere since the List itself becomes iterable 
  * entries() {
    let index = 0;
    const generator = this.fnGenerator();
    for (const value of generator) {
      if (index >= this.start && index < this.end) {
        yield value;
      }

      if (index >= this.end) {
        break;
      }
      index += 1;
    }
  }

  toList() {
    return [...this.entries()];
  }
}

module.exports = List;
