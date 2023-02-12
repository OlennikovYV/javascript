mocha.setup('bdd');

describe('Is your period late?', function () {
  it('test', () => {
    chai
      .expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35))
      .to.equal(false);
    chai
      .expect(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28))
      .to.equal(true);
  });
});

mocha.run();
