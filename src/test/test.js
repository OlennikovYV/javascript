mocha.setup('bdd');

describe('Responsible Drinking', () => {
  it('Basic tests', () => {
    chai.expect(hydrate('1 beer')).to.equal('1 glass of water');
    chai
      .expect(hydrate('2 glasses of wine and 1 shot'))
      .to.equal('3 glasses of water');
    chai
      .expect(hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer'))
      .to.equal('10 glasses of water');
  });
});

mocha.run();
