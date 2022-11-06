mocha.setup('bdd');

describe('The Office III - Broken Photocopier', () => {
  it('Testing for fixed tests', () => {
    chai.expect(broken('1')).to.equal('0');
    chai
      .expect(broken('10000000101101111110011001000'))
      .to.equal('01111111010010000001100110111');
    chai.expect(broken('100010')).to.equal('011101');
  });
});

mocha.run();
