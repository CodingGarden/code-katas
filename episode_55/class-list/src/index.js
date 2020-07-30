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
