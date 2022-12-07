mocha.setup('bdd');

describe('Generate range of integers', () => {
  it('Range', function () {
    chai.expect(generateRange(2, 10, 2)).to.eql([2, 4, 6, 8, 10]);
    chai.expect(generateRange(1, 10, 4)).to.eql([1, 5, 9]);
    chai.expect(generateRange(1, 10, 5)).to.eql([1, 6]);
  });
});

mocha.run();
