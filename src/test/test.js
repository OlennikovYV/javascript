mocha.setup('bdd');

describe('Find the Slope', () => {
  it('test', () => {
    chai.expect(slope([19, 3, 20, 3])).to.equal('0');
    chai.expect(slope([2, 7, 4, -7])).to.equal('-7');
    chai.expect(slope([10, 50, 30, 150])).to.equal('5');
    chai.expect(slope([15, 45, 12, 60])).to.equal('-5');
    chai.expect(slope([10, 20, 20, 80])).to.equal('6');
    chai.expect(slope([-10, 6, -10, 3])).to.equal('undefined');
  });
});

mocha.run();
