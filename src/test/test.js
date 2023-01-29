mocha.setup('bdd');

describe('Sum of array singles', function () {
  it('Should pass description examples', () => {
    chai.expect(repeats([4, 5, 7, 5, 4, 8])).to.equal(15);
    chai.expect(repeats([9, 10, 19, 13, 19, 13])).to.equal(19);
    chai.expect(repeats([16, 0, 11, 4, 8, 16, 0, 11])).to.equal(12);
    chai.expect(repeats([5, 17, 18, 11, 13, 18, 11, 13])).to.equal(22);
    chai.expect(repeats([5, 10, 19, 13, 10, 13])).to.equal(24);
  });
});

mocha.run();
