mocha.setup('bdd');

describe('Character Concatenation', function () {
  it('test', () => {
    chai.expect(charConcat('abc def')).to.equal('af1be2cd3');
    chai.expect(charConcat('CodeWars')).to.equal('Cs1or2da3eW4');
  });
});

mocha.run();
