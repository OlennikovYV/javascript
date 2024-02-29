mocha.setup('bdd');

describe(`Count the days!`, function () {
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

  it('Some example tests', function () {
    equal(countDays(new Date('February 28, 2016')), 'The day is in the past!');
    equal(countDays(new Date()), 'Today is the day!');
    equal(countDays(new Date('2511-12-31T00:00:00.000Z')), '178178 days');
    equal(countDays(new Date('2024-03-01T00:00:00.000Z')), '1 days');
  });
});

mocha.run();
