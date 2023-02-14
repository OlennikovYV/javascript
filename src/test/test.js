mocha.setup('bdd');

describe('Unpacking Arguments', function () {
  it('test', () => {
    chai
      .expect(
        spread(
          function (x, y) {
            return x + y;
          },
          [1, 2]
        )
      )
      .to.equal(3);
  });
});

mocha.run();
