mocha.setup('bdd');

describe('Smallest unused ID', function () {
  it('returns the lowestNextId', function () {
    chai.expect(nextId([0, 1, 2, 3, 5])).to.equal(4);
  });
  it('returns the lowestNextId', function () {
    chai.expect(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(11);
  });
  it('returns the lowestNextId - unsorted input with duplicates', function () {
    chai.expect(nextId([1, 2, 0, 2, 3, 5])).to.equal(4);
  });
  it('returns the zero - unsorted input with duplicates', function () {
    chai.expect(nextId([1, 1, 3, 3, 4, 4, 6, 9])).to.equal(0);
    chai.expect(nextId([2, 4, 6, 9, 9, 9, 9, 9])).to.equal(0);
  });
});

mocha.run();
