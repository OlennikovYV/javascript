mocha.setup('bdd');

describe('Potenciation', () => {
  it('test', () => {
    chai.expect(power(1, 701270)).to.equal(1);
    chai.expect(power(2, 2)).to.equal(4);
    chai.expect(power(3, 2)).to.equal(9);
    chai.expect(power(-1, 40)).to.equal(1);
  });
});

mocha.run();
