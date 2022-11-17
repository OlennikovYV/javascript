mocha.setup('bdd');

describe('Find Count of Most Frequent Item in an Array', () => {
  it('test', () => {
    chai.expect(mostFrequentItemCount([3, -1, -1])).to.equal(2);
    chai
      .expect(
        mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
      )
      .to.equal(5);
  });
});

mocha.run();
