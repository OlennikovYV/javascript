mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    let cat = new Cat('Mr Whiskers');
    chai.expect(cat.speak()).to.equal('Mr Whiskers meows.');
    cat = new Cat('Lamp');
    chai.expect(cat.speak()).to.equal('Lamp meows.');
    cat = new Cat('$$Money Bags$$');
    chai.expect(cat.speak()).to.equal('$$Money Bags$$ meows.');
  });
});

mocha.run();
