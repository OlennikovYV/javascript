mocha.setup('bdd');

describe('Get key/value pairs as arrays', function () {
  it('tests', () => {
    chai.expect(keysAndValues({ a: 1, b: 2, c: 3 })).to.eql([
      ['a', 'b', 'c'],
      [1, 2, 3],
    ]);
    chai.expect(keysAndValues({})).to.eql([[], []]);
    chai.expect(keysAndValues({ 1: 'a', 2: 'b', 3: 'c' })).to.eql([
      ['1', '2', '3'],
      ['a', 'b', 'c'],
    ]);
  });
});

mocha.run();
