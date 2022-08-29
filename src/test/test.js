mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])).to.equal(3);
    chai.expect(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])).to.equal(2);
    chai.expect(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])).to.equal(0);
    chai.expect(pairs([-55, -56, -7, -6, 56, 55, 63, 62])).to.equal(4);
    chai.expect(pairs([73, 72, 8, 9, 73, 72])).to.equal(3);
  });
});

mocha.run();
