mocha.setup('bdd');

describe('Tests', () => {
  it('Test', () => {
    chai
      .expect(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
      .to.equal('Battle Result: Evil eradicates all trace of Good');
    chai
      .expect(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))
      .to.equal('Battle Result: Good triumphs over Evil');
    chai
      .expect(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))
      .to.equal('Battle Result: No victor on this battle field');
  });
});

mocha.run();
