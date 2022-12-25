mocha.setup('bdd');

describe('Exclamation marks series #5: Remove all exclamation marks from the end of words', () => {
  it('It should works for basic tests', function () {
    chai.expect(remove('Hi!')).to.equal('Hi');
    chai.expect(remove('Hi!!!')).to.equal('Hi');
    chai.expect(remove('!Hi')).to.equal('!Hi');
    chai.expect(remove('!Hi!')).to.equal('!Hi');
    chai.expect(remove('Hi! Hi!')).to.equal('Hi Hi');
    chai.expect(remove('!!!Hi !!hi!!! !hi')).to.equal('!!!Hi !!hi !hi');
  });
});

mocha.run();
