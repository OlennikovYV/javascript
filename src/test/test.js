mocha.setup('bdd');

describe('Filter unused digits', () => {
  it('example tests', () => {
    chai.expect(unusedDigits(12, 34, 56, 78)).to.equal('09');
    chai.expect(unusedDigits(2015, 8, 26)).to.equal('3479');
  });
});

mocha.run();
