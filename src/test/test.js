mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(unluckyDays(1586)).to.equal(1);
    chai.expect(unluckyDays(1001)).to.equal(3);
    chai.expect(unluckyDays(2819)).to.equal(2);
    chai.expect(unluckyDays(2792)).to.equal(2);
    chai.expect(unluckyDays(2723)).to.equal(2);
    chai.expect(unluckyDays(1909)).to.equal(1);
    chai.expect(unluckyDays(1812)).to.equal(2);
    chai.expect(unluckyDays(1618)).to.equal(2);
    chai.expect(unluckyDays(2132)).to.equal(1);
    chai.expect(unluckyDays(2065)).to.equal(3);
  });
});

mocha.run();
