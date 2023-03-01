mocha.setup('bdd');

describe('How many times should I go?', function () {
  it('test', () => {
    chai.expect(howManyTimes(40, 15)).to.equal(3);
    chai.expect(howManyTimes(30, 10)).to.equal(3);
    chai.expect(howManyTimes(80, 15)).to.equal(6);
  });
});

mocha.run();
