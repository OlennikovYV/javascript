mocha.setup('bdd');

describe(`String reverse slicing 101`, function () {
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

  it('Basic tests', function () {
    deepEqual(reverseSlice('123'), ['321', '21', '1']);
    deepEqual(reverseSlice('abcde'), ['edcba', 'dcba', 'cba', 'ba', 'a']);
  });
});

mocha.run();
