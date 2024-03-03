mocha.setup('bdd');

describe(`Get decimal part of the given number`, function () {
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

  it('returns decimal part from 10 as 0', function () {
    equal(getDecimal(10), 0);
  });

  it('returns decimal part from -1.2 as 0.2', function () {
    equal(getDecimal(-1.2), 0.2);
  });

  it('returns decimal part from 4.5 as 0.5', function () {
    equal(getDecimal(4.5), 0.5);
  });
  it('returns decimal part from 9.908687e-1 as 0.9908687', function () {
    equal(getDecimal(9.908687e-1), 0.9908687);
  });
});

mocha.run();
