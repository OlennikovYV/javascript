mocha.setup('bdd');

describe('Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction', () => {
  it('test', () => {
    chai.expect(shuffleIt([1, 2, 3, 4, 5], [1, 2])).to.eql([1, 3, 2, 4, 5]);
    chai
      .expect(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]))
      .to.eql([1, 3, 2, 5, 4]);
    chai
      .expect(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]))
      .to.eql([1, 3, 5, 2, 4]);
  });
});

mocha.run();
