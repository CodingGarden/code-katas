/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
class List {
  constructor(fnGenerator, start = 0, end = Infinity) {
    this.fnGenerator = fnGenerator;
    this.generator = fnGenerator();
    this.start = start;
    this.end = end;
    this[Symbol.iterator] = this.entries;
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

  init() {
    return new List(this.fnGenerator, this.start, this.end - 1);
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
      for (const value of this) {
        yield mapFn(value);
      }
    }
    return new List(mapGenerator.bind(this), this.start, this.end);
  }

  filter(predicate) {
    function* filterGenerator() {
      for (const value of this) {
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
      for (const list of this) {
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
    for (const value of this) {
      result = foldFn(result, value);
    }
    return result;
  }

  find(predicate) {
    for (const value of this) {
      if (predicate(value)) return value;
    }
    return undefined;
  }

  findIndex(predicate) {
    let index = 0;
    for (const value of this) {
      if (predicate(value)) return index;
      index += 1;
    }
    return -1;
  }

  any(predicate) {
    const foundIndex = this.findIndex(predicate);
    return foundIndex !== -1;
  }

  all(predicate) {
    for (const value of this) {
      if (!predicate(value)) return false;
    }
    return true;
  }

  the() {
    let hasDefaultValue = false;
    let defaultValue;
    for (const value of this) {
      if (!hasDefaultValue) {
        defaultValue = value;
        hasDefaultValue = true;
      } else if (value !== defaultValue) return undefined;
    }
    return defaultValue;
  }

  elem(findValue) {
    for (const value of this) {
      if (value === findValue) return true;
    }
    return false;
  }

  elemIndex(element) {
    let index = 0;
    for (const value of this) {
      if (value === element) return index;
      index += 1;
    }
    return -1;
  }

  cons(value) {
    function* listFn() {
      yield value;
      yield* this;
    }
    return new List(listFn.bind(this), this.start, this.end);
  }

  append(list) {
    function* listFn() {
      yield* list.entries();
      yield* this;
    }
    return new List(listFn.bind(this));
  }

  slice(start, end) {
    return new List(this.fnGenerator, start, end);
  }

  foldr(reducer, accumulator) {
    const values = this.toList();
    for (let i = values.length - 1; i >= 0; i -= 1) {
      accumulator = reducer(values[i], accumulator);
    }
    return accumulator;
  }

  last() {
    const values = this.toList();
    return values.pop();
  }

  scanl(scanFn, accumulator) {
    function* scanLGenerator() {
      yield accumulator;
      for (const value of this) {
        accumulator = scanFn(accumulator, value);
        yield accumulator;
      }
    }
    // a poor way of memoization -- using toList and fromList
    return List.fromList( new List(scanLGenerator.bind(this), this.start, this.end).toList() );
  }

  scanr(scanFn, accumulator) {
    return this.reverse().scanl(scanFn, accumulator).reverse();
  }

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
    return [...this];
  }
}

module.exports = List;
