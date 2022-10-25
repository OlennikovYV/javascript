mocha.setup('bdd');

describe('Enumerable Magic #5- True for Just One?', () => {
  it('test', () => {
    chai
      .expect(
        one([1, 2, 3, 4, 5], function (item) {
          return item < 2;
        })
      )
      .to.equal(true);
    chai
      .expect(
        one([1, 2, 3, 4, 5], function (item) {
          return item % 2;
        })
      )
      .to.equal(false, 'more than 1 item are odd');
    chai
      .expect(
        one([1, 2, 3, 4, 5], function (item) {
          return item > 5;
        })
      )
      .to.equal(false, 'none item is greater than 5');
  });
});

mocha.run();
