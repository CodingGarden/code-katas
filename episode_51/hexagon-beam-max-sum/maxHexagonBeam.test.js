const {
  sumBeam,
  getForwardDiagonalBeamSums,
  createHexagon,
  padForwardDiagonalHexagon,
  getBackwardDiagonalBeamSums,
  maxHexagonBeam,
} = require('./maxHexagonBeam');

describe('createHexagon', () => {
  it('should create a simple hexagon', () => {
    const hexagon = createHexagon(2, [1, 2]);
    expect(hexagon).toHaveLength(3);
    expect(hexagon[0]).toStrictEqual( [1, 2]);
    expect(hexagon[1]).toStrictEqual([1, 2, 1]);
    expect(hexagon[2]).toStrictEqual( [2, 1]);
  });

  it('should create a complex hexagon', () => {
    const hexagon = createHexagon(4, [2, 4, 6, 8]);
    expect(hexagon).toHaveLength(7);
    expect(hexagon[0]).toStrictEqual([2, 4, 6, 8]);
    expect(hexagon[1]).toStrictEqual([2, 4, 6, 8, 2]);
    expect(hexagon[2]).toStrictEqual([4, 6, 8, 2, 4, 6]);
    expect(hexagon[3]).toStrictEqual([8, 2, 4, 6, 8, 2, 4]);
    expect(hexagon[4]).toStrictEqual([6, 8, 2, 4, 6, 8]);
    expect(hexagon[5]).toStrictEqual([2, 4, 6, 8, 2]);
    expect(hexagon[6]).toStrictEqual([4, 6, 8, 2]);
  });
});

describe('sumBeam', () => {
  it('should sum the array', () => {
    expect(sumBeam([1, 2, 3])).toBe(6);
  });
});

describe('padForwardDiagonalHexagon', () => {
  it('should pad the rows with zeroes', () => {
    const hexagon = createHexagon(2, [1, 2]);
    const paddedHexagon = padForwardDiagonalHexagon(2, hexagon);
    expect(paddedHexagon[0]).toStrictEqual([1, 2, 0]);
    expect(paddedHexagon[1]).toStrictEqual([1, 2, 1]);
    expect(paddedHexagon[2]).toStrictEqual([0, 2, 1]);
  });
});

describe('padForwardDiagonalHexagon', () => {
  it('should pad the rows with zeroes', () => {
    const hexagon = createHexagon(4, [2, 4, 6, 8]);
    const paddedHexagon = padForwardDiagonalHexagon(4, hexagon);
    expect(paddedHexagon[0]).toStrictEqual([2, 4, 6, 8, 0, 0, 0]);
    expect(paddedHexagon[1]).toStrictEqual([2, 4, 6, 8, 2, 0, 0]);
    expect(paddedHexagon[2]).toStrictEqual([4, 6, 8, 2, 4, 6, 0]);
    expect(paddedHexagon[3]).toStrictEqual([8, 2, 4, 6, 8, 2, 4]);
    expect(paddedHexagon[4]).toStrictEqual([0, 6, 8, 2, 4, 6, 8]);
    expect(paddedHexagon[5]).toStrictEqual([0, 0, 2, 4, 6, 8, 2]);
    expect(paddedHexagon[6]).toStrictEqual([0, 0, 0, 4, 6, 8, 2]);
  });
});

describe('getForwardDiagonalBeamSums', () => {
  it('should get the sum for the diagonals for a small n', () => {
    const hexagon = createHexagon(2, [1, 2]);
    const beamSums = getForwardDiagonalBeamSums(2, hexagon);
    expect(beamSums[0]).toStrictEqual(1 + 1);
    expect(beamSums[1]).toStrictEqual(2 + 2 + 2);
    expect(beamSums[2]).toStrictEqual(1 + 1);
  });
});

describe('getBackwardDiagonalBeamSums', () => {
  it('should get the sum for the diagonals for a small n', () => {
    const hexagon = createHexagon(2, [1, 2]);
    const beamSums = getBackwardDiagonalBeamSums(2, hexagon);
    expect(beamSums[0]).toStrictEqual(1 + 2);
    expect(beamSums[1]).toStrictEqual(1 + 2 + 1);
    expect(beamSums[2]).toStrictEqual(2 + 1);
  });
});

describe('maxHexagonBeam', () => {
  const example_tests = [
    [2,[5,8,3,8]],
    [3,[1,3,5,7]],
    [4,[2,4,6,8]],
    [5,[1,0,4,-6]],
    [5,[2]]
  ];
  const example_solutions = [24,23,34,9,18];

  example_tests.forEach(([n,seq],i) => {
    it(`Testing n = ${n} and seq = ${seq}`, () => {
      const user = maxHexagonBeam(n,seq);
      const sol = example_solutions[i];
      expect(user).toBe(sol);
    });
  });
});