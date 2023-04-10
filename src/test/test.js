mocha.setup('bdd');

describe(
  'Exclamation marks series #7: Remove words from the ' +
    'sentence if it contains one exclamation mark',
  function () {
    it('It should works for basic tests', function () {
      chai.expect(remove('Hi!')).to.equal('');
      chai.expect(remove('Hi! Hi!')).to.equal('');
      chai.expect(remove('Hi! Hi! Hi!')).to.equal('');
      chai.expect(remove('Hi Hi! Hi!')).to.equal('Hi');
      chai.expect(remove('Hi! !Hi Hi!')).to.equal('');
      chai.expect(remove('Hi! Hi!! Hi!')).to.equal('Hi!!');
      chai.expect(remove('Hi! !Hi! Hi!')).to.equal('!Hi!');
      chai
        .expect(
          remove(
            'qcu! obqgs lsal iyhvh !zety! !xsklhd nhcpqjr fmnoio !rhnmde unv'
          )
        )
        .to.equal('obqgs lsal iyhvh !zety! nhcpqjr fmnoio unv');
    });
  }
);

mocha.run();
