mocha.setup('bdd');

describe('Not so black box', () => {
  it('test', () => {
    chai.expect(check()).to.equal(true);
  });
});

mocha.run();
