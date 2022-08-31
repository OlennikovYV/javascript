mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(amIWilson(5)).to.equal(true);
    chai.expect(amIWilson(9)).to.equal(false);
    chai.expect(amIWilson(6)).to.equal(false);
    chai.expect(amIWilson(30)).to.equal(false);
    chai.expect(amIWilson(697)).to.equal(false);
    chai.expect(amIWilson(562)).to.equal(false);
    chai.expect(amIWilson(563)).to.equal(true);
  });
});

mocha.run();
