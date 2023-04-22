mocha.setup('bdd');

describe('Stanton measure', function () {
  const assert = chai.assert;

  it('test', () => {
    assert.equal(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]), 3);
    assert.equal(
      stantonMeasure([-11, 1, -12, 1, -1, 1, -4, 1, -7, 1, 1, 1]),
      0
    );
  });
});

mocha.run();
