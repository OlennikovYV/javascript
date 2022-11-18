mocha.setup('bdd');

describe('Is n divisible by (...)?', () => {
  it('test', () => {
    chai.expect(isDivisible(3)).to.equal(true);
    chai.expect(isDivisible(3, 3, 4)).to.equal(false);
    chai.expect(isDivisible(12, 3, 4)).to.equal(true);
    chai.expect(isDivisible(8, 3, 4, 2, 5)).to.equal(false);
  });
});

mocha.run();
