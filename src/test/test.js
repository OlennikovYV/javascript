mocha.setup('bdd');

describe('Are the numbers in order?', function () {
  it('Should pass description examples', () => {
    chai.expect(inAscOrder([1, 2, 4, 7, 19])).to.equal(true);
    chai.expect(inAscOrder([1, 2, 3, 4, 5])).to.equal(true);
    chai.expect(inAscOrder([1, 6, 10, 18, 2, 4, 20])).to.equal(false);
    chai.expect(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])).to.equal(false);
  });
});

mocha.run();
