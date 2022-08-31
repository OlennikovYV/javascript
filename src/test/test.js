mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(calculate('1plus2plus3plus4')).to.equal('10');
    chai.expect(calculate('1minus2minus3minus4')).to.equal('-8');
    chai.expect(calculate('1plus2plus3minus4')).to.equal('2');
    chai.expect(calculate('245minus868minus545')).to.equal('-1168');
  });
});

mocha.run();
