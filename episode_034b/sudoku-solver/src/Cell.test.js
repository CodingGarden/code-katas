const Line = require('./Line');
const Cell = require('./Cell');

function createSimpleUnsolvedCell() {
  const row = new Line();
  const column = new Line();
  const subgrid = new Line();
  for (let i = 1; i < 9; i += 1) {
    const cell = new Cell(i, row, column);
    row.addCell(cell);
    column.addCell(cell);
    subgrid.addCell(cell);
  }
  const unsolvedCell = new Cell(0, row, column, subgrid);
  row.addCell(unsolvedCell);
  column.addCell(unsolvedCell);
  subgrid.addCell(unsolvedCell);
  return unsolvedCell;
}

describe('Cell', () => {
  it('should create an instance of a cell', () => {
    const row = new Line();
    const column = new Line();
    const cell = new Cell(5, row, column);
    expect(cell).toBeDefined();
  });
  it('should return no possible values if already solved', () => {
    const row = new Line();
    const column = new Line();
    const cell = new Cell(5, row, column);
    expect(cell.getPossibleValues()).toStrictEqual([]);
  });
  it('should return a single value if all other values exist in the given row / column / subgrid', () => {
    const unsolvedCell = createSimpleUnsolvedCell();
    expect(unsolvedCell.getPossibleValues()).toStrictEqual([9]);
  });
  it('should solve itself if only 1 possible value', () => {
    const unsolvedCell = createSimpleUnsolvedCell();
    const isSolved = unsolvedCell.solve();
    expect(isSolved).toBe(true);
    expect(unsolvedCell.value).toBe(9);
  });
  it('should return true if solved', () => {
    const cell = new Cell(9);
    expect(cell.isSolved).toBe(true);
  });
  it('should return false if not solved', () => {
    const cell = new Cell(0);
    expect(cell.isSolved).toBe(false);
  });
});
