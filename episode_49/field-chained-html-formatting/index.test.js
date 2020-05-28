const Format = require('./index');

describe('Sample tests', () => {
  it('should wrap input in the correct element', () => {
    expect(Format.div('Foo')).toBe('<div>Foo</div>');
  });

  it('tag property should have other tag properties', () => {
    expect(Format.div).toHaveProperty('h1');
  });

  it('should chain call together', () => {
    expect(Format.div.h1('Foo')).toBe('<div><h1>Foo</h1></div>');
  });

  it('should chain call together', () => {
    expect(Format.div.div.div.h1('Foo')).toBe('<div><div><div><h1>Foo</h1></div></div></div>');
  });

  it('tag property should have other tag properties many levels deep', () => {
    expect(Format.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div.div).toHaveProperty('div');
  });

  it('should allow multiple arguments', () => {
    expect(Format.div('Foo', 'Bar')).toBe('<div>FooBar</div>');
  });

  it('Should allow you to store and reuse methods', () => {
    const wrapInDiv = Format.div;
    expect(wrapInDiv('Foo')).toBe('<div>Foo</div>');
  });

  it('Should allow nested calls', () => {
    expect(Format.div(
      Format.h1('Title'),
      Format.p(`Paragraph with a ${Format.span('span')}.`),
    )).toBe('<div><h1>Title</h1><p>Paragraph with a <span>span</span>.</p></div>');
  });

  it('Should be assignable to a variable and re-callable', () => {
    const wrapInDivH1 = Format.div.h1;
    expect(wrapInDivH1('Far')).toBe('<div><h1>Far</h1></div>');
    expect(wrapInDivH1.span('Bar')).toBe('<div><h1><span>Bar</span></h1></div>');
  });
});
