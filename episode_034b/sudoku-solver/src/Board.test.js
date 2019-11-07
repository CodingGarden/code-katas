const Board = require('./Board');

const simplePuzzle = require('./fixtures/simple-puzzle');
const simplePuzzleSolution = require('./fixtures/simple-puzzle-solution');
const nonSimplePuzzle = require('./fixtures/non-simple-puzzle');
const nonSimplePuzzleSolution = require('./fixtures/non-simple-puzzle-solution');

describe('Board', () => {
  it('shold create a new board', () => {
    const board = new Board(simplePuzzle);
    expect(board).toBeDefined();
  });
  it('should initialize rows for a new board', () => {
    const board = new Board(simplePuzzle);
    expect(board.rows).toBeDefined();
    expect(Object.keys(board.rows).length).toBe(9);
  });
  it('should initialize columns for a new board', () => {
    const board = new Board(simplePuzzle);
    expect(board.columns).toBeDefined();
    expect(Object.keys(board.columns).length).toBe(9);
  });
  it('should initialize subgrids for a new board', () => {
    const board = new Board(simplePuzzle);
    expect(board.subgrids).toBeDefined();
    expect(Object.keys(board.subgrids).length).toBe(9);
  });
  it('should return the cell at the given row and column', () => {
    const board = new Board(simplePuzzle);
    expect(board.getCell(2, 2).value).toBe(0);
    expect(board.getCell(8, 8).value).toBe(9);
  });
  it('should solve all unsolved cells', () => {
    const board = new Board(simplePuzzle);
    board.solve();
    expect(board.isSolved()).toBe(true);
    expect(board.getCell(2, 2).value).toBe(8);
    expect(board.toArray()).toStrictEqual(simplePuzzleSolution);
  });
  it('should return the board as an array', () => {
    const board = new Board(simplePuzzle);
    expect(board.toArray()).toStrictEqual(simplePuzzle);
  });
  it('should solve a non simple puzzle', () => {
    const board = new Board(nonSimplePuzzle);
    board.solve();
    expect(board.isSolved()).toBe(true);
    expect(board.toArray()).toStrictEqual(nonSimplePuzzleSolution);
  });
});

describe('getSubgridId', () => {
  it('should return 0 for all cells in subgrid 0', () => {
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        const id = Board.getSubgridId(col, row);
        expect(id).toBe(0);
      }
    }
  });

  it('should return 1 for all cells in subgrid 1', () => {
    for (let row = 0; row < 3; row += 1) {
      for (let col = 3; col < 6; col += 1) {
        const id = Board.getSubgridId(col, row);
        expect(id).toBe(1);
      }
    }
  });

  it('should return 2 for all cells in subgrid 2', () => {
    for (let row = 0; row < 3; row += 1) {
      for (let col = 6; col < 9; col += 1) {
        const id = Board.getSubgridId(col, row);
        expect(id).toBe(2);
      }
    }
  });
});
