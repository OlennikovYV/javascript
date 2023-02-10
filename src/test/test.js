mocha.setup('bdd');

describe('Return Two Highest Values in List', function () {
  it('Tests', () => {
    chai.expect(twoHighest([])).to.eql([]);
    chai.expect(twoHighest([15])).to.eql([15]);
    chai.expect(twoHighest([15, 20, 20, 17])).to.eql([20, 17]);
  });
});

mocha.run();
