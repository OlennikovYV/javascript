mocha.setup('bdd');

describe('Return the Missing Element', () => {
  it('test', () => {
    chai.expect(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])).to.equal(8);
    chai.expect(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])).to.equal(3);
  });
});

mocha.run();
