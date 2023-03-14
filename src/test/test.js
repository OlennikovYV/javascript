mocha.setup('bdd');

describe('See You Next Happy Year', function () {
  it('test', () => {
    chai.expect(solve([0, 1, 2, 3])).to.equal(0);
    chai.expect(solve([0, 1, 2, 3, 'a', 'b'])).to.equal(0);
    chai
      .expect(solve([0, 15, 'z', 16, 'm', 13, 14, 'c', 9, 10, 13, 'u', 4, 3]))
      .to.equal(0);
    chai.expect(solve([13, 6, 8, 15, 4, 8, 13])).to.equal(1);
    chai.expect(solve([1, 'a', 17, 8, 'e', 3, 'i', 12, 1])).to.equal(-2);
    chai
      .expect(
        solve([
          5,
          15,
          16,
          10,
          6,
          4,
          16,
          't',
          13,
          'n',
          14,
          'k',
          'n',
          0,
          'q',
          'd',
          7,
          9,
        ])
      )
      .to.equal(2);
  });
});

mocha.run();
