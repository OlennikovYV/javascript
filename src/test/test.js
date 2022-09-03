mocha.setup('bdd');

describe('Tests', () => {
  it('Testing for []', () => {
    chai.expect(reverseBits(417)).to.equal(267);
    chai.expect(reverseBits(267)).to.equal(417);
    chai.expect(reverseBits(0)).to.equal(0);
    chai.expect(reverseBits(2017)).to.equal(1087);
    chai.expect(reverseBits(1023)).to.equal(1023);
    chai.expect(reverseBits(1024)).to.equal(1);
    chai
      .expect(reverseBits(Number.MAX_SAFE_INTEGER))
      .to.equal(Number.MAX_SAFE_INTEGER);
  });
});

mocha.run();
