mocha.setup('bdd');

describe('Find the smallest power higher than a given a value', () => {
  it('Tests', () => {
    chai.expect(findNextPower(8, 3)).to.equal(27);
    chai.expect(findNextPower(12385, 3)).to.equal(13824);
    chai.expect(findNextPower(1245678, 5)).to.equal(1419857);
    chai.expect(findNextPower(1245678, 6)).to.equal(1771561);
    chai.expect(findNextPower(4782969, 7)).to.equal(10000000);
  });
});

mocha.run();
