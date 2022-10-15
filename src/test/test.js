mocha.setup('bdd');

describe('Age Range Compatibility Equation', () => {
  it('Example Test Cases', () => {
    chai.expect(datingRange(17)).to.equal('15-20');
    chai.expect(datingRange(40)).to.equal('27-66');
    chai.expect(datingRange(15)).to.equal('14-16');
    chai.expect(datingRange(35)).to.equal('24-56');
    chai.expect(datingRange(10)).to.equal('9-11');
  });
});

mocha.run();
