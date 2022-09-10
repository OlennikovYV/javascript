mocha.setup('bdd');

describe('Tests', () => {
  it('Test', () => {
    chai.expect(jumpingNumber(1)).to.equal('Jumping!!');
    chai.expect(jumpingNumber(7)).to.equal('Jumping!!');
    chai.expect(jumpingNumber(9)).to.equal('Jumping!!');
    chai.expect(jumpingNumber(23)).to.equal('Jumping!!');
    chai.expect(jumpingNumber(32)).to.equal('Jumping!!');
    chai.expect(jumpingNumber(79)).to.equal('Not!!');
    chai.expect(jumpingNumber(98)).to.equal('Jumping!!');
    chai.expect(jumpingNumber(8987)).to.equal('Jumping!!');
    chai.expect(jumpingNumber(625189)).to.equal('Not!!');
    chai.expect(jumpingNumber(4343456)).to.equal('Jumping!!');
    chai.expect(jumpingNumber(98789876)).to.equal('Jumping!!');
  });
});

mocha.run();
