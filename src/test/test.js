mocha.setup('bdd');

describe(`Eliminate the intruders! Bit manipulation`, function () {
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

  it('Testing for 11010101010101', () =>
    equal(eliminateUnsetBits('11010101010101'), 255));
  it('Testing for 111', () => equal(eliminateUnsetBits('111'), 7));
  it('Testing for 1000000', () => equal(eliminateUnsetBits('1000000'), 1));
  it('Testing for 000', () => equal(eliminateUnsetBits('000'), 0));
});

mocha.run();
