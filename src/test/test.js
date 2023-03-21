mocha.setup('bdd');

describe('Reverse list', function () {
  it('test', () => {
    chai.expect(reverseList([])).to.eql([]);
    chai.expect(reverseList([1, 2, 3])).to.eql([3, 2, 1]);
  });
});

mocha.run();
