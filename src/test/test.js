mocha.setup('bdd');

describe('Vowel one', function () {
  it('Sample tests', () => {
    chai.expect(vowelOne('vowelOne')).to.equal('01010101');
    chai.expect(vowelOne('123, arou')).to.equal('000001011');
  });
});

mocha.run();
