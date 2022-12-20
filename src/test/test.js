mocha.setup('bdd');

describe('Unique Sum', () => {
  it('test', () => {
    chai.expect(uniqueSum([1, 2, 3])).to.equal(6);
    chai.expect(uniqueSum([1, 3, 8, 1, 8])).to.equal(12);
    chai.expect(uniqueSum([-1, -1, 5, 2, -7])).to.equal(-1);
    chai.expect(uniqueSum([])).to.equal(null);
  });
});

mocha.run();
