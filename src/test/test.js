mocha.setup('bdd');

describe(
  'Training JS #19: Methods of String object--toUpperCase() ' +
    'toLowerCase() and replace()',
  function () {
    it('test', () => {
      chai.expect(alienLanguage('My name is John')).to.equal('My NAMe Is JOHn');
      chai
        .expect(alienLanguage('this is an example'))
        .to.equal('THIs Is An EXAMPLe');
      chai.expect(alienLanguage('Hello World')).to.equal('HELLo WORLd');
      chai.expect(alienLanguage('HELLO WORLD')).to.equal('HELLo WORLd');
    });
  }
);

mocha.run();
