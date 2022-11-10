mocha.setup('bdd');

describe('Formatting decimal places #1', () => {
  it('works for some examples', function () {
    chai.expect(twoDecimalPlaces(10.1289767789)).to.equal(10.12);
    chai.expect(twoDecimalPlaces(-7488.83485834983)).to.equal(-7488.83);
    chai.expect(twoDecimalPlaces(4.653725356)).to.equal(4.65);
  });
});

mocha.run();
