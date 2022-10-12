mocha.setup('bdd');

describe('Sum of all arguments', () => {
  it('Small tests', () => {
    chai.expect(sum(1)).to.equal(1);
    chai.expect(sum(1, 2)).to.equal(3);
    chai.expect(sum(5, 7, 9)).to.equal(21);
    chai.expect(sum(12, 1, 1, 1, 1)).to.equal(16);
    chai.expect(sum(12, 1, 1, 1, 1, 1, 1)).to.equal(18);
  });
});

mocha.run();
