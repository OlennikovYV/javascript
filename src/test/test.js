mocha.setup('bdd');

describe('Show multiples of 2 numbers within a range', function () {
  it('test', () => {
    chai
      .expect(
        reject([1, 2, 3, 4, 5, 6], function (num) {
          return num % 2 == 0;
        })
      )
      .to.eql([1, 3, 5]);
  });
});

mocha.run();
