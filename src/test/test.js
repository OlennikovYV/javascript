mocha.setup('bdd');

describe(`Only One Gift Per Child`, function () {
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

  it('must not throw an error', function () {
    noError(() => handOutGift('Peter'));
    noError(() => handOutGift('Alison'));
    noError(() => handOutGift('John'));
    noError(() => handOutGift('Maria'));
  });

  it('must throw an error', function () {
    error(function () {
      handOutGift('Peter');
    });
  });
});

mocha.run();
