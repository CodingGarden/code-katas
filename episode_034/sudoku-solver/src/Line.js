class Line {
  constructor() {
    this.cells = [];
  }

  getCell(col) {
    return this.cells[col];
  }

  addCell(cell) {
    this.cells.push(cell);
  }
}

module.exports = Line;
