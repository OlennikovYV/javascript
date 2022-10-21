mocha.setup('bdd');

describe('String transformer', () => {
  it('test', () => {
    chai.expect(stringTransformer('Example string')).to.equal('STRING eXAMPLE');
  });
});

mocha.run();
