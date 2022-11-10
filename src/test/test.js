mocha.setup('bdd');

describe('Dictionary from two lists', () => {
  it('test', () => {
    chai.expect(createDict(['a', 'b', 'c'], [1, 2, 3])).to.eql({
      a: 1,
      b: 2,
      c: 3,
    });
    chai.expect(createDict(['a', 'b', 'c'], [1, 2, 3, 4])).to.eql({
      a: 1,
      b: 2,
      c: 3,
    });
    chai.expect(createDict(['a', 'b', 'c', 'd'], [1, 2, 3])).to.eql({
      a: 1,
      b: 2,
      c: 3,
      d: null,
    });
  });
});

mocha.run();
