mocha.setup('bdd');

describe(`Array Exchange`, function () {
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

  it('Tests', () => {
    const a = ['1', '2', '3', '4', '5', '6', '7'];
    const b = ['a', 'b', 'c'];

    exchangeWith(a, b);

    deepEqual(a, ['c', 'b', 'a']);
    deepEqual(b, ['7', '6', '5', '4', '3', '2', '1']);
  });
});

mocha.run();
