mocha.setup('bdd');

describe('Find all occurrences of an element in an array', () => {
  it('Basic tests', () => {
    chai.expect(arithmeticSequenceElements(1, 2, 5)).to.equal('1, 3, 5, 7, 9');
    chai.expect(arithmeticSequenceElements(1, 0, 5)).to.equal('1, 1, 1, 1, 1');
    chai
      .expect(arithmeticSequenceElements(1, -3, 10))
      .to.equal('1, -2, -5, -8, -11, -14, -17, -20, -23, -26');
    chai
      .expect(arithmeticSequenceElements(100, -10, 10))
      .to.equal('100, 90, 80, 70, 60, 50, 40, 30, 20, 10');
  });
});

mocha.run();
