mocha.setup('bdd');

describe('Scrabble Score', function () {
  it("returns 0 for ''", function () {
    chai.expect(scrabbleScore('')).to.equal(0);
  });
  it('returns 1 for a', function () {
    chai.expect(scrabbleScore('a')).to.equal(1);
  });
  it('returns 6 for street', function () {
    chai.expect(scrabbleScore('street')).to.equal(6);
  });

  it('returns score of " a" (with space)', function () {
    chai.expect(scrabbleScore(' a')).to.equal(1);
  });
  it('returns 6 for street with whitespaces', function () {
    chai.expect(scrabbleScore('st re et')).to.equal(6);
  });
  it('returns 22 for street with whitespaces', function () {
    chai.expect(scrabbleScore('quirky')).to.equal(22);
  });
});

mocha.run();
