const chai = require("chai");

const advice = require('./index');

chai.config.truncateThreshold = 0
const { expect } = chai;

function sorted(array) {
  return array.sort(function(a,b) {
    if(a[0] == b[0]) return a[1]-b[1];
    return a[0]-b[0];
  });
}

describe("basic tests", () => {
  it("Returnes top left corner for agent in the bottom right", () => {
    expect(advice([[1, 1]], 2)).to.deep.equal([[0, 0]]);
  });
  it("Returns empty list for size 0", () => {
    expect(advice([[0, 0]], 0)).to.deep.equal([]);
  });
  it("Works for the example in description", () => {
    expect(sorted(advice([[0, 0], [1, 5], [5, 1]], 6))).to.deep.equal(
      sorted([[2, 2], [3, 3], [4, 4], [5, 5]]))
  });
  it("returns empty list for agents everywhere", () => {
    const everywhere = [];
    const n = 10;
    for (var y = 0 ; y < n ; y ++) {
      for (var x = 0; x < n; x++) {
        everywhere.push([x, y]);
      }
    }
    expect(sorted(advice(everywhere, 10))).to.deep.equal([]);
  });
  it("returns all coordinates for only ignored agents", () => {
    expect(sorted(advice([[9, 9]], 1))).to.deep.equal([[0,0]])
  });
  it("returns the correct solution for six agents", () => {
    expect(sorted(advice([[1, 1], [3, 5], [4, 8], [7, 3], [7, 8], [9, 1]], 10)))
      .to.deep.equal(sorted([[0, 9], [0, 7], [5, 0]]))
  });
  it("returns correct solutions for seven agents", () => {
    expect(sorted(advice([[1, 3], [2, 3], [2, 7], [4, 1], [5, 9], [7, 0], [9, 5]], 10)))
    .to.deep.equal(sorted([[0, 0], [0, 9], [4, 5], [5, 5], [5, 4], [6, 3], [6, 4],
                                     [6,6], [7, 7], [8, 8], [9, 9]])
        )
  });
  it("returns correct solutions for another six agents", () => {
    expect(sorted(advice([[0, 0], [0, 9], [1, 5], [5, 1], [9, 0], [9, 9]], 10)))
    .to.deep.equal(sorted([[5, 7], [6, 6], [7, 5]]))
  });
  it("Finds the furthest location from a single agent", () => {
     expect(advice([[0, 0]], 10)).to.deep.equal([[9, 9]])
  });
  it("agent in top left and bottom right", () => {
    expect(sorted(advice([[0, 0], [1, 1], [5, 5]], 2))).to.deep.equal(sorted([[0, 1], [1, 0]]))
  });
  it('works for the reference solution', () => {
    expect(sorted(advice([[0, 0], [1, 5], [5, 1]], 6))).to.deep.equal([[2, 2], [3, 3], [4, 4], [5, 5]]);
  });
});
