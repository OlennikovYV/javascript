mocha.setup('bdd');

describe('How many consecutive numbers are needed?', () => {
  it('test', () => {
    chai.expect(consecutive([4, 8, 6])).to.equal(2);
    chai.expect(consecutive([1, 2, 3, 4])).to.equal(0);
    chai.expect(consecutive([])).to.equal(0);
    chai.expect(consecutive([1])).to.equal(0);
  });
});

mocha.run();
