mocha.setup('bdd');

describe(`Time Converter: hours, minutes, seconds and milliseconds`, function () {
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

  it('Sample tests', function () {
    equal(convert(new Date(2016, 2, 8, 16, 42, 59)), '16:42:59,000');
    equal(convert(new Date(1951, 10, 31, 2, 2, 24, 399)), '02:02:24,399');
    equal(convert(new Date(1523, 5, 29, 23, 2, 2, 9)), '23:02:02,009');
    equal(convert(new Date(1, 1, 1, 1, 1, 1, 110)), '01:01:01,110');
    equal(convert(new Date(9999, 9, 9, 9, 9, 9, 999)), '09:09:09,999');
    equal(convert(new Date(2, 12, 30, 23, 59, 59, 875)), '23:59:59,875');
    equal(convert(new Date(1850, 12, 30, 13, 39, 19)), '13:39:19,000');
    equal(convert(new Date(1978, 3, 18, 12, 0, 0, 0)), '12:00:00,000');
    equal(convert(new Date(1850, 12, 30, 11, 11, 11, 123)), '11:11:11,123');
    equal(convert(new Date(1850, 12, 30, 0, 0, 0, 321)), '00:00:00,321');
  });
});

mocha.run();
