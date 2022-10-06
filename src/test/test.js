mocha.setup('bdd');

describe('Online RPG: player to qualifying stage?', () => {
  it('test', () => {
    chai.expect(playerRankUp(64)).to.equal(false);
    chai
      .expect(playerRankUp(101))
      .to.equal(
        'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
      );
  });
});

mocha.run();
