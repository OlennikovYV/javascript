mocha.setup('bdd');

describe(
  'Exclamation marks series #8: Move all exclamation' +
    'marks to the end of the sentence',
  function () {
    it('sample tests', function () {
      chai.expect(nicknameGenerator('Jimmy')).to.equal('Jim');
      chai.expect(nicknameGenerator('Samantha')).to.equal('Sam');
      chai.expect(nicknameGenerator('Sam')).to.equal('Error: Name too short');
      chai
        .expect(nicknameGenerator('Kayne'))
        .to.equal('Kay', "'y' is not a vowel");
      chai.expect(nicknameGenerator('Melissa')).to.equal('Mel');
      chai.expect(nicknameGenerator('James')).to.equal('Jam');
    });
  }
);

mocha.run();
