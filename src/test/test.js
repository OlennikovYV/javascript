mocha.setup('bdd');

describe(
  'Exclamation marks series #8: Move all exclamation' +
    'marks to the end of the sentence',
  function () {
    it('sample tests', function () {
      chai.expect(remove('Hi!')).to.equal('Hi!');
      chai.expect(remove('Hi! Hi!')).to.equal('Hi Hi!!');
      chai.expect(remove('Hi! Hi! Hi!')).to.equal('Hi Hi Hi!!!');
      chai.expect(remove('Hi! !Hi Hi!')).to.equal('Hi Hi Hi!!!');
      chai.expect(remove('Hi! Hi!! Hi!')).to.equal('Hi Hi Hi!!!!');
    });
  }
);

mocha.run();
