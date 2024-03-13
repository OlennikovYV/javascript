mocha.setup('bdd');

describe(`Jenny the youngest detective`, function () {
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

  it('test', () => {
    equal(missingWord([5, 0, 3], 'I love you'), 'ivy');
    equal(
      missingWord([29, 31, 8], 'The quick brown fox jumps over the lazy dog'),
      'bay'
    );
    equal(missingWord([12, 4, 6], 'Good Morning'), 'No mission today');
  });
});

mocha.run();
