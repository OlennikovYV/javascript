mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(greet('Niks')).to.equal('hello Niks!');
    chai.expect(greet(null)).to.equal(null);
  });
});

mocha.run();
