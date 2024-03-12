mocha.setup('bdd');

describe(`Mean vs. Median`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('[1, 1, 1]', function () {
    equal(meanVsMedian([1, 1, 1]), 'same');
  });

  it('[1, 2, 37]', function () {
    equal(meanVsMedian([1, 2, 37]), 'mean');
  });

  it('[7, 14, -70]', function () {
    equal(meanVsMedian([7, 14, -70]), 'median');
  });
});

mocha.run();
