mocha.setup('bdd');

describe('How many are smaller than me?', function () {
  it('Testing for fixed tests', () => {
    chai.expect(smaller([5, 4, 3, 2, 1])).to.eql([4, 3, 2, 1, 0]);
    chai.expect(smaller([1, 2, 3])).to.eql([0, 0, 0]);
    chai.expect(smaller([1, 2, 0])).to.eql([1, 1, 0]);
    chai.expect(smaller([1, 2, 1])).to.eql([0, 1, 0]);
    chai.expect(smaller([1, 1, -1, 0, 0])).to.eql([3, 3, 0, 0, 0]);
    chai
      .expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]))
      .to.eql([4, 1, 5, 5, 0, 0, 0, 0, 0]);
  });
});

mocha.run();
