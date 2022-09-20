mocha.setup('bdd');

describe('Insert dashes', () => {
  it('Fixed tests', () => {
    chai.expect(insertDash(454793)).to.equal('4547-9-3');
    chai.expect(insertDash(123456)).to.equal('123456');
    chai.expect(insertDash(1003567)).to.equal('1003-567');
  });
});

mocha.run();
