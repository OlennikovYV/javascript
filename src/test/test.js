mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(yearDays(0)).to.equal('0 has 366 days');
    chai.expect(yearDays(-64)).to.equal('-64 has 366 days');
    chai.expect(yearDays(2016)).to.equal('2016 has 366 days');
    chai.expect(yearDays(1974)).to.equal('1974 has 365 days');
    chai.expect(yearDays(-10)).to.equal('-10 has 365 days');
    chai.expect(yearDays(666)).to.equal('666 has 365 days');
    chai.expect(yearDays(1800)).to.equal('1800 has 365 days');
    chai.expect(yearDays(1857)).to.equal('1857 has 365 days');
  });
});

mocha.run();
