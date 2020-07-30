const List = require('./index');

const Test = {
  describe,
  it,
  assertDeepEquals(val1, val2) {
    expect(val1).toStrictEqual(val2);
  },
};

Test.describe('List', () => {
  const plus = (v, w) => v + w;
  const times = (v, w) => v * w;
  const inc = (x) => x + 1;
  const id = (x) => x;
  const constant = id;
  Test.it('the basics', () => {
    Test.assertDeepEquals(List.empty.toList(), []);
    Test.assertDeepEquals(List.fromList([]).toList(), []);
    Test.assertDeepEquals(List.fromList([1, 2, 3]).toList(), [1, 2, 3]);
    Test.assertDeepEquals(List.fromList([1, 2, 3]).head(), 1);
    Test.assertDeepEquals(List.fromList([]).head(), undefined);
    Test.assertDeepEquals(List.fromList([1, 2, 3]).tail().toList(), [2, 3]);
    Test.assertDeepEquals(List.fromList([]).tail().toList(), []);
    Test.assertDeepEquals(List.fromList([1, 2, 3]).get(0), 1);
    Test.assertDeepEquals(List.fromList([1, 2, 3]).get(1), 2);
    Test.assertDeepEquals(List.fromList([1, 2, 3]).get(2), 3);
    Test.assertDeepEquals(List.fromList([1, 2, 3, 4]).take(3).toList(), [1, 2, 3]);
    Test.assertDeepEquals(List.fromList([1, 2, 3, 4]).drop(1).toList(), [2, 3, 4]);
    Test.assertDeepEquals(List.empty.length(), 0);
    Test.assertDeepEquals(List.fromList([1]).length(), 1);
    Test.assertDeepEquals(List.fromList([1, 2]).length(), 2);
    Test.assertDeepEquals(List.empty.nil(), true);
    Test.assertDeepEquals(List.fromList([1]).nil(), false);
    Test.assertDeepEquals(List.fromList([1, 2]).nil(), false);
    Test.assertDeepEquals(List.fromList([2, 3]).cons(1).toList(), [1, 2, 3]);
    Test.assertDeepEquals(List.empty.cons(1).toList(), [1]);
    Test.assertDeepEquals(List.empty.append(List.empty).toList(), []);
    Test.assertDeepEquals(List.empty.append(List.fromList([1, 2, 3])).toList(), [1, 2, 3]);
    Test.assertDeepEquals(List.fromList([1, 2, 3]).append(List.empty).toList(), [1, 2, 3]);
    Test.assertDeepEquals(List.fromList([1, 2, 3]).append(List.fromList([1, 2, 3])).toList(), [1, 2, 3, 1, 2, 3]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).slice(1).toList(), [2, 3]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).slice(1, 2).toList(), [2]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).slice().toList(), [1, 2, 3]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).map((x) => x * x).toList(), [1, 4, 9]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).filter((x) => Boolean(x & 1)).toList(), [1, 3]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).filter((x) => !(x & 1)).toList(), [2]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).reverse().toList(), [3, 2, 1]);
    // Test.assertDeepEquals(List.fromList([List.fromList([1, 2, 3]), List.fromList([1, 2, 3])]).concat().toList(), [1, 2, 3, 1, 2, 3]);
    // Test.assertDeepEquals(List.empty.concat().toList(), []);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).zipWith(times, List.fromList([3, 2, 1])).toList(), [3, 4, 3]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).foldr((x, z) => z.cons(x), List.empty).toList(), [1, 2, 3]);
    // Test.assertDeepEquals(List.empty.foldr(() => _ | _, Math.E), Math.E);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).foldl(plus, 0), 6);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).foldl(inc, 0), List.fromList([1, 2, 3]).length());
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).scanr(plus, 0).toList(), [6, 5, 3, 0]);
    // Test.assertDeepEquals(List.empty.scanr(times, 1).toList(), [1]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).scanl(plus, 0).toList(), [0, 1, 3, 6]);
    // Test.assertDeepEquals(List.empty.scanl(times, 1).toList(), [1]);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).elem(0), false);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).elem(2), true);
    // Test.assertDeepEquals(List.empty.elem(0), false);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).elemIndex(0), -1);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).elemIndex(2), 1);
    // Test.assertDeepEquals(List.empty.elemIndex(0), -1);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).find((x) => !(x & 1)), 2);
    // Test.assertDeepEquals(List.fromList([1, 3]).find((x) => !(x & 1)), undefined);
    // Test.assertDeepEquals(List.empty.find((x) => !(x & 1)), undefined);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).findIndex((x) => !(x & 1)), 1);
    // Test.assertDeepEquals(List.fromList([1, 3]).find((x) => !(x & 1)), undefined);
    // Test.assertDeepEquals(List.empty.find((x) => !(x & 1)), undefined);
    // Test.assertDeepEquals(List.fromList([true, false]).any(id), true);
    // Test.assertDeepEquals(List.empty.any(id), false);
    // Test.assertDeepEquals(List.fromList([true, false]).all(id), false);
    // Test.assertDeepEquals(List.empty.all(id), true);
    // Test.assertDeepEquals(List.fromList([1, 2, 3]).the(), undefined);
    // Test.assertDeepEquals(List.fromList([1, 1, 1]).the(), 1);
    // Test.assertDeepEquals(List.empty.the(), undefined);
  });
  Test.it('list generators', () => {
    Test.assertDeepEquals(List.repeat(1).take(10).toList(), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    Test.assertDeepEquals(List.repeat(2).take(10).toList(), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
    Test.assertDeepEquals(List.repeat(3).take(10).toList(), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
    Test.assertDeepEquals(List.iterate(inc, 0).take(10).toList(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    Test.assertDeepEquals(List.cycle(List.fromList([1, 2, 3])).take(10).toList(), [1, 2, 3, 1, 2, 3, 1, 2, 3, 1]);
    Test.assertDeepEquals(List.replicate(10, 1).toList(), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    Test.assertDeepEquals(List.replicate(10, 2).toList(), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
    Test.assertDeepEquals(List.replicate(10, 3).toList(), [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
    Test.assertDeepEquals(List.replicate(0, undefined).toList(), List.empty.toList());
    Test.assertDeepEquals(List.replicate(10, 1).toList(), List.iterate(id, 1).take(10).toList());
  });
});
