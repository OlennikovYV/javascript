mocha.setup('bdd');

describe('Find min and max', () => {
  it('Basic tests', function () {
    chai.expect(getMinMax([1])).to.eql([1, 1]);
    chai.expect(getMinMax([1, 2])).to.eql([1, 2]);
    chai.expect(getMinMax([2, 1])).to.eql([1, 2]);
  });
});

mocha.run();
