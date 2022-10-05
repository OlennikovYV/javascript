mocha.setup('bdd');

describe('Extra Perfect Numbers (Special Numbers Series #7)', () => {
  it('Testing for fixed tests', () => {
    chai.expect(extraPerfect(3)).to.eql([1, 3]);
    chai.expect(extraPerfect(5)).to.eql([1, 3, 5]);
    chai.expect(extraPerfect(7)).to.eql([1, 3, 5, 7]);
    chai
      .expect(extraPerfect(28))
      .to.eql([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27]);
    chai
      .expect(extraPerfect(39))
      .to.eql([
        1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37,
        39,
      ]);
  });
});

mocha.run();
