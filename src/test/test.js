mocha.setup('bdd');

describe('All Star Code Challenge #1', function () {
  it('test', () => {
    const iverson = new NBAplayer('Iverson', '76ers', 11.2);
    const jordan = new NBAplayer('Jordan', 'bulls', 20.2);

    chai.expect(sumPPG(iverson, jordan)).to.equal(31.4);
  });
});

mocha.run();
