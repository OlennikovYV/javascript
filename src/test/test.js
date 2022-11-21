mocha.setup('bdd');

describe('Largest Elements', () => {
  it('test', () => {
    chai.expect(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).to.eql([9, 10]);
    chai.expect(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])).to.eql([5, 5, 5]);
    chai
      .expect(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]))
      .to.eql([3, 5, 9, 13, 22, 50, 63]);
    chai.expect(largest(0, [1, 2, 3, 4, 8, 7, 6, 5])).to.eql([]);
  });
});

mocha.run();
