mocha.setup('bdd');

describe(`isEven? - Bitwise Series`, function () {
  const equal = chai.assert.equal;
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

  it('It should handle manual tests', function () {
    equal(isEven('%'), false);
    equal(isEven(2), true);
    equal(isEven(3), false);
    equal(isEven(14), true);
    equal(isEven(15), false);
    equal(isEven(26), true);
    equal(isEven(27), false);
  });
});

mocha.run();
