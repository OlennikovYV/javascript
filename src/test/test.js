mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(head([5, 1])).to.equal(5);
    chai.expect(tail([1])).to.eql([]);
    chai.expect(init([1, 5, 7, 9])).to.eql([1, 5, 7]);
    chai.expect(last([7, 2])).to.equal(2);
  });
});

mocha.run();
