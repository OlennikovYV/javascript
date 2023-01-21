mocha.setup('bdd');

describe('What dominates your array?', function () {
  it('Fixed tests', () => {
    chai.expect(dominator([3, 4, 3, 2, 3, 1, 3, 3])).to.equal(3);
    chai.expect(dominator([1, 2, 3, 4, 5])).to.equal(-1);
    chai.expect(dominator([1, 1, 1, 2, 2, 2])).to.equal(-1);
    chai.expect(dominator([1, 1, 1, 2, 2, 2, 2])).to.equal(2);
  });
});

mocha.run();
