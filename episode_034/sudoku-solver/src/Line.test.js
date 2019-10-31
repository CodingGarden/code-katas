const Line = require('./Line');

describe('Line', () => {
  it('Can create a new Line', () => {
    const line = new Line();
    expect(line).toBeDefined();
  });

  it('Can add and retrieve a cell', () => {
    const line = new Line();
    const cell = {};
    line.addCell(cell);
    expect(line.getCell(0)).toBe(cell);
  });
});
