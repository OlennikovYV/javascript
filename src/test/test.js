mocha.setup('bdd');

describe(`Some Circles`, function () {
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
  const noError = chai.assert.doesNotThrow;
  const include = chai.assert.include;

  it('test', () => {
    equal(sumCircles(2), 'We have this much circle: 3');
    equal(sumCircles(2, 3, 4), 'We have this much circle: 23');
    equal(sumCircles(1, 1, 1), 'We have this much circle: 2');
    equal(
      sumCircles(13.58, 14.9, 56.99, 107.321),
      'We have this much circle: 11916'
    );
  });
});

mocha.run();
