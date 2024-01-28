mocha.setup('bdd');

describe(`All Star Code Challenge #20`, function () {
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

  it('test', () => {
    deepEqual(addArrays([1, 2], [4, 5]), [5, 7]);
    deepEqual(
      addArrays(['a'], ['b']),
      ['ab'],
      'Should work with strings as well'
    );
    error(function () {
      addArrays([1, 2, 3], [4, 5]);
    }, 'Error');
  });
});

mocha.run();
