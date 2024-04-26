mocha.setup('bdd');

describe(`Point in a unit circle`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('test', () => {
    isTrue(pointInCircle(0, 0), 'Origin is inside');
    isFalse(pointInCircle(2, 0), '(2, 0) is outside');
    isTrue(pointInCircle(0, 0.9), '(0, 0.9) is inside');
    isTrue(pointInCircle(0.5, 0.5), '(0.5, 0.5) is inside');
    isFalse(pointInCircle(1, 0), '(1, 0) is on border and thus outside');
  });
});

mocha.run();
