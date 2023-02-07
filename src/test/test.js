mocha.setup('bdd');

describe('Pick peaks', function () {
  it('Tests', function () {
    chai.expect(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])).to.eql({
      pos: [3, 7],
      peaks: [6, 3],
    });
    chai.expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).to.eql({
      pos: [3, 7],
      peaks: [6, 3],
    });
    chai.expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])).to.eql({
      pos: [3, 7, 10],
      peaks: [6, 3, 2],
    });
    chai.expect(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1])).to.eql({
      pos: [2, 4],
      peaks: [3, 2],
    });
    chai.expect(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])).to.eql({
      pos: [2],
      peaks: [3],
    });
    chai.expect(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6])).to.eql({
      pos: [2],
      peaks: [3],
    });
    chai.expect(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1])).to.eql({
      pos: [2],
      peaks: [3],
    });
    chai
      .expect(
        pickPeaks([
          1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4,
          3,
        ])
      )
      .to.eql({ pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] });
    chai.expect(pickPeaks([])).to.eql({ pos: [], peaks: [] });
    chai.expect(pickPeaks([1, 1, 1, 1])).to.eql({ pos: [], peaks: [] });
  });
});

mocha.run();
