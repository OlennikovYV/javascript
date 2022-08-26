mocha.setup('bdd');

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    chai.expect(correctTail('Fox', 'x')).to.be.true;
    chai.expect(correctTail('Rhino', 'o')).to.be.true;
    chai.expect(correctTail('Meerkat', 't')).to.be.true;
    chai.expect(correctTail('Wolf', 'W')).to.be.false;
  });
});

mocha.run();
