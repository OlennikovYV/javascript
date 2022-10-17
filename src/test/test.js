mocha.setup('bdd');

describe('Split The Bill', () => {
  it('test', () => {
    chai.expect(splitTheBill({ A: 20, B: 15, C: 10 })).to.eql({
      A: 5,
      B: 0,
      C: -5,
    });
    chai.expect(splitTheBill({ A: 40, B: 25, X: 10 })).to.eql({
      A: 15,
      B: 0,
      X: -15,
    });
  });
});

mocha.run();
