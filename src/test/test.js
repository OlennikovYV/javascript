mocha.setup('bdd');

describe(`Debug Sum of Digits of a Number`, function () {
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

  it('Fixed tests', () => {
    equal(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
    equal(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
    equal(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');
  });
});

mocha.run();
