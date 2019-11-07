const Line = require('./Line');
const Cell = require('./Cell');


class Board {
  // Gracias para Spacie
  static getSubgridId(column, row) {
    return Math.floor(column / 3) + Math.floor(row / 3) * 3;
  }

  constructor(puzzle) {
    this.rows = {};
    this.columns = {};
    this.subgrids = {};
    this.cells = [];

    for (let rowNum = 0; rowNum < 9; rowNum += 1) {
      this.rows[rowNum] = this.rows[rowNum] || new Line();
      for (let colNum = 0; colNum < 9; colNum += 1) {
        const subgridId = Board.getSubgridId(colNum, rowNum);
        this.subgrids[subgridId] = this.subgrids[subgridId] || new Line();
        const value = puzzle[rowNum][colNum];
        this.columns[colNum] = this.columns[colNum] || new Line();
        const cell = new Cell(value, this.rows[rowNum], this.columns[colNum], this.subgrids[subgridId]);
        this.rows[rowNum].addCell(cell);
        this.columns[colNum].addCell(cell);
        this.subgrids[subgridId].addCell(cell);
        this.cells.push(cell);
      }
    }
  }

  getCell(rowNum, colNum) {
    const row = this.rows[rowNum];
    return row.getCell(colNum);
  }

  solve() {
    for (let i = 0; i < this.cells.length; i += 1) {
      const cell = this.cells[i];
      if (!cell.isSolved) {
        const solved = cell.solve();
        if (solved) {
          i = -1;
        }
      }
    }

    // Another possible solution:
    // Mertcan Ekiz
    // do a for loop inside a while loop, break from for loop when one cell is solved, break from while loop when entire board is solved
  }

  isSolved() {
    return this.cells.every((cell) => cell.isSolved);
  }

  toArray() {
    const puzzle = [];
    for (let rowNum = 0; rowNum < 9; rowNum += 1) {
      const row = [];
      puzzle.push(row);
      for (let colNum = 0; colNum < 9; colNum += 1) {
        row.push(this.getCell(rowNum, colNum).value);
      }
    }
    return puzzle;
  }
}

module.exports = Board;
