mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(balance('!!', '??')).to.equal('Right');
    chai.expect(balance('!??', '?!!')).to.equal('Left');
    chai.expect(balance('!?!!', '?!?')).to.equal('Left');
    chai.expect(balance('!!???!????', '??!!?!!!!!!!')).to.equal('Balance');
  });
});

mocha.run();
