mocha.setup('bdd');

describe('Prefill an Array', () => {
  it('Tests', () => {
    chai.expect(prefill(0, 1)).to.eql([]);
    chai.expect(prefill(3, 1)).to.eql([1, 1, 1]);
    chai.expect(prefill(2, 'abc')).to.eql(['abc', 'abc']);
    chai.expect(prefill('1', 1)).to.eql([1]);
    chai.expect(prefill(3, prefill(2, '2d'))).to.eql([
      ['2d', '2d'],
      ['2d', '2d'],
      ['2d', '2d'],
    ]);

    let errorThrown = false;
    try {
      prefill('xyz', 1);
    } catch (e) {
      chai.expect(e.name).to.equal('TypeError');
      chai.expect(e.message).to.equal('xyz is invalid');
      errorThrown = true;
    }
    chai.expect(errorThrown).to.equal(true);
  });
});

mocha.run();
