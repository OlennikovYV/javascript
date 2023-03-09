mocha.setup('bdd');

describe('Implement Array.prototype.filter()', function () {
  it('test', () => {
    chai
      .expect(
        [1, 2, 3, 4].filter(num => {
          return num > 3;
        })
      )
      .to.eql([4]);
  });
});

mocha.run();
