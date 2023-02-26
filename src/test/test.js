mocha.setup('bdd');

describe('Are they square?', function () {
  it('Basic tests', function () {
    chai.expect(isSquare([1, 4, 9, 16, 25, 36])).to.equal(true);
    chai.expect(isSquare([1, 2, 3, 4, 5, 6])).to.equal(false);
    chai.expect(isSquare([])).to.equal(undefined);
    chai.expect(isSquare([1, 2, 4, 15])).to.equal(false);
  });
});

mocha.run();
