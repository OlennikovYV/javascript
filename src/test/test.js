mocha.setup('bdd');

describe('Kata', () => {
  it('Testing with sample tests', () => {
    chai.expect(validate(123)).to.be.false;
    chai.expect(validate(1)).to.be.false;
    chai.expect(validate(2121)).to.be.true;
    chai.expect(validate(1230)).to.be.true;
  });
});

mocha.run();
