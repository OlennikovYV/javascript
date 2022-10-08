mocha.setup('bdd');

describe('For Twins: 1. Types', () => {
  it('Basic Tests', function () {
    chai.expect(typeValidation(42, 'number')).to.equal(true);
    chai.expect(typeValidation('42', 'number')).to.equal(false);
  });
});

mocha.run();
