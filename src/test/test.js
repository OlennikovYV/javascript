mocha.setup('bdd');

describe('Caffeine Script', () => {
  it('Tests to see if your function returns the correct values.', () => {
    chai.expect(caffeineBuzz(1)).to.equal('mocha_missing!');
    chai.expect(caffeineBuzz(3)).to.equal('Java');
    chai.expect(caffeineBuzz(4)).to.equal('mocha_missing!');
    chai.expect(caffeineBuzz(6)).to.equal('JavaScript');
    chai.expect(caffeineBuzz(12)).to.equal('CoffeeScript');
  });
});

mocha.run();
