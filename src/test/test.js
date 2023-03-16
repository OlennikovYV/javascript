mocha.setup('bdd');

describe('Double Every Other', function () {
  it('example tests', () => {
    chai.expect(doubleEveryOther([1, 2, 3, 4])).to.eql([1, 4, 3, 8]);
  });
});

mocha.run();
