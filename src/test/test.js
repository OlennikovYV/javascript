mocha.setup('bdd');

describe('All Star Code Challenge #3', () => {
  it('test', () => {
    chai.expect(removeVowels('drake')).to.equal('drk');
    chai.expect(removeVowels('aeiou')).to.equal('');
  });
});

mocha.run();
