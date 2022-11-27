mocha.setup('bdd');

describe('Frequency sequence', () => {
  it('test', () => {
    chai.expect(freqSeq('hello world', '-')).to.equal('1-1-3-3-2-1-1-2-1-3-1');
    chai.expect(freqSeq('19999999', ':')).to.equal('1:7:7:7:7:7:7:7');
    chai.expect(freqSeq('^^^**$', 'x')).to.equal('3x3x3x2x2x1');
  });
});

mocha.run();
