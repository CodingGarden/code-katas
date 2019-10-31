const getValue = (cell) => cell.value;
const getValues = (line) => line.cells.map(getValue);

class Cell {
  constructor(value, row, column, subgrid) {
    this.value = value;
    this.row = row;
    this.col = column;
    this.subgrid = subgrid;
  }

  get isSolved() {
    return !!this.value;
  }

  getPossibleValues() {
    if (this.value) return [];
    const rowValues = getValues(this.row);
    const colValues = getValues(this.col);
    const subgrid = getValues(this.subgrid);
    const takenValues = new Set([...rowValues, ...colValues, ...subgrid]);
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((value) => !takenValues.has(value));
  }

  solve() {
    const possibleValues = this.getPossibleValues();
    if (possibleValues.length === 1) {
      [this.value] = possibleValues;
    }
    return this.isSolved;
  }
}

module.exports = Cell;
