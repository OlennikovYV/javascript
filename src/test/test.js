mocha.setup('bdd');

describe('Tests', () => {
  it('Testing for []', () => {
    chai.expect(validateHello('ahoj')).to.equal(true);
    chai.expect(validateHello('meh')).to.equal(false);
  });
});

mocha.run();
