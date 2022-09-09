mocha.setup('bdd');

describe('Tests', () => {
  it('Test', () => {
    chai
      .expect(
        bigToSmall([
          [1, 2],
          [3, 4],
          [5, 6],
        ])
      )
      .to.equal('6>5>4>3>2>1');
    chai
      .expect(
        bigToSmall([
          [1, 3, 5],
          [2, 4, 6],
        ])
      )
      .to.equal('6>5>4>3>2>1');
    chai.expect(bigToSmall([[1, 1], [1], [1, 1]])).to.equal('1>1>1>1>1');
  });
});

mocha.run();
