mocha.setup('bdd');

describe('Unscrambled eggs', () => {
  it('test', () => {
    chai.expect(unscrambleEggs('ceggodegge heggeregge')).to.equal('code here');
    chai.expect(unscrambleEggs('FeggUNegg KeggATeggA')).to.equal('FUN KATA');
  });
});

mocha.run();
