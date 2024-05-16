mocha.setup('bdd');

describe(`Array Mappings`, function () {
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

  it('should work for the examples shown in the description', () => {
    deepEqual(
      [1, 2, 3].map(x => x ** 2),
      [1, 4, 9]
    );
    deepEqual(
      [1, 2, 3].map(x => 2 * x),
      [2, 4, 6]
    );
    deepEqual(
      [1, 2, 3].map(x => 2 ** x),
      [2, 4, 8]
    );
    deepEqual(
      [1, 2, 3].map(x => x.toString()),
      ['1', '2', '3']
    );
    deepEqual(
      ['1', '2', '3'].map(x => parseInt(x)),
      [1, 2, 3]
    );
  });
});

mocha.run();
