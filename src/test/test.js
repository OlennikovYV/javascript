mocha.setup('bdd');

describe('Be Concise III - Sum Squares', () => {
  it('should behave in exactly the same way as the program prior to refactoring for the range of inputs tested', () => {
    chai.expect(sumSquares([1, 2, 3, 4, 5])).to.equal(55);
    chai.expect(sumSquares([7, 3, 9, 6, 5])).to.equal(200);
    chai.expect(sumSquares([11, 13, 15, 18, 2])).to.equal(843);
    chai
      .expect(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]))
      .to.equal(110);
  });
});

mocha.run();
