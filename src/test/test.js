mocha.setup('bdd');

describe('SpeedCode #2 - Array Madness', () => {
  it('should work for fixed tests', () => {
    chai.expect(arrayMadness([4, 5, 6], [1, 2, 3])).to.equal(true);
    chai.expect(arrayMadness([5, 6, 7], [4, 5, 6])).to.equal(false);
    chai.expect(arrayMadness([4, 5, 6], [3, 4, 5])).to.equal(false);
    chai.expect(arrayMadness([3, 4, 5], [2, 3, 4])).to.equal(false);
    chai.expect(arrayMadness([2, 3, 4], [1, 2, 3])).to.equal(false);
    chai.expect(arrayMadness([1, 2, 3], [0, 1, 2])).to.equal(true);
    chai.expect(arrayMadness([5, 3, 2, 4, 1], [15])).to.equal(false);
    chai.expect(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3])).to.equal(false);
    chai
      .expect(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]))
      .to.equal(false);
    chai
      .expect(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]))
      .to.equal(true);
    chai
      .expect(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]))
      .to.equal(false);
  });
});

mocha.run();
