mocha.setup('bdd');

describe('Unpacking Arguments', function () {
  it('test', () => {
    chai.expect(diagonalSum([[12]])).to.equal(12);
    chai
      .expect(
        diagonalSum([
          [1, 2],
          [3, 4],
        ])
      )
      .to.equal(5);
    chai
      .expect(
        diagonalSum([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ])
      )
      .to.equal(15);
    chai
      .expect(
        diagonalSum([
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
        ])
      )
      .to.equal(34);
  });
});

mocha.run();
