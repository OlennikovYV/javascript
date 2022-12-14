mocha.setup('bdd');

describe('Search for letters', () => {
  it('example tests', () => {
    chai.expect(change('a **&  bZ')).to.equal('11000000000000000000000001');
  });
});

mocha.run();
