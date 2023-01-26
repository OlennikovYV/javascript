mocha.setup('bdd');

describe('We Have Liftoff', function () {
  it('test', () => {
    chai
      .expect(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]))
      .to.equal('10 9 8 7 6 5 4 3 2 1 liftoff!');
  });
});

mocha.run();
