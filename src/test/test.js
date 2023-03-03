mocha.setup('bdd');

describe('Password maker', function () {
  it('should work for some examples', function () {
    chai
      .expect(makePassword('Give me liberty or give me death'))
      .to.equal('Gml0gmd');
    chai.expect(makePassword('Keep Calm and Carry On')).to.equal('KCaC0');
  });
});

mocha.run();
