mocha.setup('bdd');

describe('Broken sequence', () => {
  it('test', () => {
    chai.expect(findMissingNumber('1 2 3 5')).to.equal(4);
    chai.expect(findMissingNumber('1 3')).to.equal(2);
    chai.expect(findMissingNumber('1 5')).to.equal(2);
    chai.expect(findMissingNumber('')).to.equal(0);
    chai.expect(findMissingNumber('1 2 3 4 5')).to.equal(0);
    chai.expect(findMissingNumber('2 3 4 5')).to.equal(1);
    chai.expect(findMissingNumber('2 6 4 5 3')).to.equal(1);
    chai.expect(findMissingNumber('2 1 4 3 a')).to.equal(1);
  });
});

mocha.run();
