mocha.setup('bdd');

describe('By 3, or not by 3?  That is the question . . .', () => {
  it('Testing for fixed tests', () => {
    chai.expect(divisibleByThree('123')).to.equal(true);
    chai.expect(divisibleByThree('19254')).to.equal(true);
    chai.expect(divisibleByThree('88')).to.equal(false);
    chai.expect(divisibleByThree('1')).to.equal(false);
  });
});

mocha.run();
