mocha.setup('bdd');

describe('Bingo ( Or Not )', () => {
  it('test', () => {
    chai.expect(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal('LOSE');
    chai.expect(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])).to.equal('WIN');
  });
});

mocha.run();
