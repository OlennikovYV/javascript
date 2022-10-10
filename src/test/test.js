mocha.setup('bdd');

describe('Enumerable Magic #2 - True for Any?', () => {
  it('test', () => {
    chai
      .expect(
        any([1, 2, 3, 4], function (v, i) {
          return v > 3;
        })
      )
      .to.equal(true);
    chai
      .expect(
        any([1, 2, 3, 4], function (v, i) {
          return v > 4;
        })
      )
      .to.equal(false);
  });
});

mocha.run();
