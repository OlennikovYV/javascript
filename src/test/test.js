mocha.setup('bdd');

describe('Sort arrays - 1', () => {
  it('test', () => {
    chai.expect(''.isLetter()).to.equal(false);
    chai.expect('a'.isLetter()).to.equal(true);
    chai.expect('X'.isLetter()).to.equal(true);
    chai.expect('7'.isLetter()).to.equal(false);
    chai.expect('*'.isLetter()).to.equal(false);
    chai.expect('ab'.isLetter()).to.equal(false);
    chai.expect('a\n'.isLetter()).to.equal(false);
  });
});

mocha.run();
