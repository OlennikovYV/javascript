mocha.setup('bdd');

describe(`Array Array Array`, function () {
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

  it('Testing for fixed tests', () => {
    deepEqual(explode([9, 3]), [
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
      [9, 3],
    ]);
    deepEqual(explode(['a', 3]), [
      ['a', 3],
      ['a', 3],
      ['a', 3],
    ]);
    deepEqual(explode([6, 'c']), [
      [6, 'c'],
      [6, 'c'],
      [6, 'c'],
      [6, 'c'],
      [6, 'c'],
      [6, 'c'],
    ]);
    deepEqual(explode(['a', 'b']), 'Void!');
    deepEqual(explode(['a', 0]), []);
  });
});

mocha.run();
