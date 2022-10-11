mocha.setup('bdd');

describe('Balanced Number (Special Numbers Series #1 )', () => {
  it('Check balanced number', function () {
    chai.expect(balancedNum(7)).to.equal('Balanced');
    chai.expect(balancedNum(959)).to.equal('Balanced');
    chai.expect(balancedNum(13)).to.equal('Balanced');
    chai.expect(balancedNum(432)).to.equal('Not Balanced');
    chai.expect(balancedNum(424)).to.equal('Balanced');
  });
  it('Check Larger number', function () {
    chai.expect(balancedNum(1024)).to.equal('Not Balanced');
    chai.expect(balancedNum(66545)).to.equal('Not Balanced');
    chai.expect(balancedNum(295591)).to.equal('Not Balanced');
    chai.expect(balancedNum(1230987)).to.equal('Not Balanced');
    chai.expect(balancedNum(56239814)).to.equal('Balanced');
  });
});

mocha.run();
