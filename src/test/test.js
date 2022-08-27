mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(ArrowFunc([84, 101, 115, 116])).to.equal('Test');
    chai
      .expect(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]))
      .to.equal('FUS ROH DAH');
  });
});

mocha.run();
