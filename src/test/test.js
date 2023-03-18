mocha.setup('bdd');

describe('Hit Count', function () {
  it('test', () => {
    chai
      .expect(counterEffect('1250'))
      .to.eql([[0, 1], [0, 1, 2], [0, 1, 2, 3, 4, 5], [0]]);
    chai
      .expect(counterEffect('0050'))
      .to.eql([[0], [0], [0, 1, 2, 3, 4, 5], [0]]);
    chai.expect(counterEffect('0000')).to.eql([[0], [0], [0], [0]]);
  });
});

mocha.run();
