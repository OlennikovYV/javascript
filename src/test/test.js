mocha.setup('bdd');

describe('Keep the Order', function () {
  it('Fixed cases', function () {
    chai.expect(keepOrder([1, 2, 3, 4, 7], 5)).to.equal(4);
    chai.expect(keepOrder([1, 2, 3, 4, 7], 0)).to.equal(0);
    chai.expect(keepOrder([1, 1, 2, 2, 2], 2)).to.equal(2);
    chai.expect(keepOrder([1, 2, 3, 4], 5)).to.equal(4);
    chai.expect(keepOrder([1, 2, 3, 4], -1)).to.equal(0);
    chai.expect(keepOrder([1, 2, 3, 4], 2)).to.equal(1);
    chai.expect(keepOrder([1, 2, 3, 4], 0)).to.equal(0);
    chai.expect(keepOrder([1, 2, 3, 4], 1)).to.equal(0);
    chai.expect(keepOrder([1, 2, 3, 4], 2)).to.equal(1);
    chai.expect(keepOrder([1, 2, 3, 4], 3)).to.equal(2);
  });
});

mocha.run();
