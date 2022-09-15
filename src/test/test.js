mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(howManydays(1)).to.equal(31);
    chai.expect(howManydays(2)).to.equal(28);
    chai.expect(howManydays(3)).to.equal(31);
    chai.expect(howManydays(4)).to.equal(30);
    chai.expect(howManydays(12)).to.equal(31);
  });
});

mocha.run();
