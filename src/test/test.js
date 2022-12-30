mocha.setup('bdd');

describe('Find the lucky numbers', () => {
  it('test', () => {
    chai
      .expect(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]))
      .to.eql([7, 70, 17]);
    chai.expect(filterLucky([71, 9907, 69])).to.eql([71, 9907]);
  });
});

mocha.run();
