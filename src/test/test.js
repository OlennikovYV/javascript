mocha.setup('bdd');

describe('Tests', () => {
  it('Test', () => {
    chai.expect(''.vowel()).to.equal(false);
    chai.expect('a'.vowel()).to.equal(true);
    chai.expect('E'.vowel()).to.equal(true);
    chai.expect('ou'.vowel()).to.equal(false);
    chai.expect('z'.vowel()).to.equal(false);
    chai.expect('lol'.vowel()).to.equal(false);
  });
});

mocha.run();
