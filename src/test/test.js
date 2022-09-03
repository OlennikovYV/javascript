mocha.setup('bdd');

describe('Tests', () => {
  it('Test 1', function () {
    chai.expect(consecutive([1, 3, 5, 7], 3, 7)).to.equal(false);
  });
  it('Test 2', function () {
    chai.expect(consecutive([1, 3, 5, 7], 3, 1)).to.equal(true);
  });
  it('Test 3', function () {
    chai.expect(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)).to.equal(true);
  });
});

mocha.run();
