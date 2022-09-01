mocha.setup('bdd');

describe('Tests', () => {
  it('Testing for []', () => chai.expect(incrementer([]), []));
  it('Testing for [1, 2, 3]', () =>
    chai.expect(incrementer([1, 2, 3])).to.eql([2, 4, 6]));
  it('Testing for [4, 6, 7, 1, 3]', () =>
    chai.expect(incrementer([4, 6, 7, 1, 3])).to.eql([5, 8, 0, 5, 8]));
  it('Testing for [3, 6, 9, 8, 9]', () =>
    chai.expect(incrementer([3, 6, 9, 8, 9])).to.eql([4, 8, 2, 2, 4]));
  it('Testing for [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]', () =>
    chai
      .expect(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]))
      .to.eql([2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]));
});

mocha.run();
