mocha.setup('bdd');

describe('Reverser', function () {
  it('Testing for fixed tests', () => {
    chai.expect(reverse(1234)).to.equal(4321);
    chai.expect(reverse(10987)).to.equal(78901);
    chai.expect(reverse(1020)).to.equal(201);
  });
});

mocha.run();
