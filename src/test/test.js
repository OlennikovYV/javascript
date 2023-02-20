mocha.setup('bdd');

describe('Training JS #13: Number object and its properties', function () {
  it('test', () => {
    chai
      .expect(whatNumberIsIt(1 / 0))
      .to.equal('Input number is Number.POSITIVE_INFINITY');
    chai.expect(whatNumberIsIt(100)).to.equal('Input number is 100');
    chai
      .expect(whatNumberIsIt(1.7976931348623157e308))
      .to.equal('Input number is Number.MAX_VALUE');
    chai
      .expect(whatNumberIsIt(5e-324))
      .to.equal('Input number is Number.MIN_VALUE');
    chai
      .expect(whatNumberIsIt(-Number.MAX_VALUE * 2))
      .to.equal('Input number is Number.NEGATIVE_INFINITY');
    chai.expect(whatNumberIsIt(NaN)).to.equal('Input number is Number.NaN');
    chai
      .expect(whatNumberIsIt(Infinity + 1))
      .to.equal('Input number is Number.POSITIVE_INFINITY');
  });
});

mocha.run();
