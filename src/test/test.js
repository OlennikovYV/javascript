mocha.setup('bdd');

describe('Replace all items', function () {
  it('basic tests', function () {
    chai.expect(replaceAll([], 1, 2)).to.eql([]);
    chai.expect(replaceAll([1, 2, 2], 1, 2)).to.eql([2, 2, 2]);
    chai.expect(replaceAll('World', 'o', 0)).to.equal('W0rld');
  });
});

mocha.run();
