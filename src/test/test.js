mocha.setup('bdd');

describe(`Odder Than the Rest`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('should pass basic tests', function () {
    equal(oddOne([2, 4, 6, 7, 10]), 3);
    equal(oddOne([2, 16, 98, 10, 13, 78]), 4);
    equal(oddOne([4, -8, 98, -12, -7, 90, 100]), 4);
    equal(oddOne([2, 4, 6, 8]), -1);
  });
});

mocha.run();
