mocha.setup('bdd');

describe('Maximum Gap (Array Series #4)', () => {
  it('Testing for fixed tests', () => {
    chai.expect(maxGap([13, 10, 2, 9, 5])).to.equal(4);
    chai.expect(maxGap([13, 3, 5])).to.equal(8);
    chai.expect(maxGap([24, 299, 131, 14, 26, 25])).to.equal(168);
    chai.expect(maxGap([-3, -27, -4, -2])).to.equal(23);
    chai.expect(maxGap([-7, -42, -809, -14, -12])).to.equal(767);
    chai.expect(maxGap([12, -5, -7, 0, 290])).to.equal(278);
    chai.expect(maxGap([-54, 37, 0, 64, -15, 640, 0])).to.equal(576);
    chai.expect(maxGap([130, 30, 50])).to.equal(80);
    chai.expect(maxGap([1, 1, 1])).to.equal(0);
    chai.expect(maxGap([-1, -1, -1])).to.equal(0);
  });
});

mocha.run();
