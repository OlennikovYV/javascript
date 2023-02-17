mocha.setup('bdd');

describe('Return to Sanity', function () {
  it('test', () => {
    chai.expect(mystery()).to.eql({ sanity: 'Hello' });
  });
});

mocha.run();
