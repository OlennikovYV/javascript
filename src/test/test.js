mocha.setup('bdd');

describe('Inspiring Strings', () => {
  it('Test', () => {
    chai.expect(longestWord('a b c d e fgh')).to.equal('fgh');
    chai.expect(longestWord('one two three')).to.equal('three');
    chai.expect(longestWord('red blue grey')).to.equal('grey');
  });
});

mocha.run();
