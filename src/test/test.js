mocha.setup('bdd');

describe(
  'Exclamation marks series #3: Remove all exclamation marks ' +
    'from sentence except at the end',
  function () {
    it('sample tests', function () {
      chai.expect(remove('Hi!')).to.equal('Hi!');
      chai.expect(remove('Hi!!!')).to.equal('Hi!!!');
      chai.expect(remove('!Hi')).to.equal('Hi');
      chai.expect(remove('!Hi!')).to.equal('Hi!');
      chai.expect(remove('Hi! Hi!')).to.equal('Hi Hi!');
      chai.expect(remove('Hi')).to.equal('Hi');
    });
  }
);

mocha.run();
