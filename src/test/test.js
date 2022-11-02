mocha.setup('bdd');

describe('Is integer safe to use?', () => {
  it('test', () => {
    chai.expect(SafeInteger(9007199254740992)).to.equal(false);
    chai.expect(SafeInteger(9007199254740990)).to.equal(true);
  });
});

mocha.run();
