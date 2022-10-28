mocha.setup('bdd');

describe('Check three and two', () => {
  it('test', () => {
    chai.expect(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)).to.equal(6);
    chai.expect(nextItem(['a', 'b', 'c'], 'd')).to.equal(undefined);
    chai.expect(nextItem(['a', 'b', 'c'], 'c')).to.equal(undefined);
    chai.expect(nextItem('testing', 't')).to.equal('e');
    function* countFrom(n) {
      for (let i = n; ; ++i) yield i;
    }
    chai.expect(nextItem(countFrom(1), 12)).to.equal(13);
  });
});

mocha.run();
