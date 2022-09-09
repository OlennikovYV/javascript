mocha.setup('bdd');

describe('Tests', () => {
  it('Test', () => {
    const arr = [4, 0, 4];
    chai.expect(arr.numberOfOccurrences(4)).to.equal(2);
  });
});

mocha.run();
