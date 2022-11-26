mocha.setup('bdd');

describe('Is Integer Array?', () => {
  it('test', () => {
    chai.expect(isIntArray([])).to.equal(true);
    chai.expect(isIntArray(null)).to.equal(false);
    chai.expect(isIntArray([1, 2, 3, 4])).to.equal(true);
    chai.expect(isIntArray([1, 2, 3, 4.0])).to.equal(true);
    chai.expect(isIntArray([1, 2, 3, 4.1])).to.equal(false);
    chai.expect(isIntArray([1, 2, 3, NaN])).to.equal(false);
  });
});

mocha.run();
