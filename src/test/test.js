mocha.setup('bdd');

describe('Guesser', () => {
  it('Correct guess should return true', () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    guesser.guess(10);
    chai.expect(guesser.guess(10)).to.be.true;
  });

  it('Wrong guess should return false', () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(1);
    chai.expect(guesser.guess(1)).to.be.false;
  });

  it('Lives ran out should throw', () => {
    let guesser = new Guesser(10, 2);
    guesser.guess(1);
    guesser.guess(2);

    chai.expect(() => guesser.guess(10)).to.throw();
  });
});

mocha.run();
