mocha.setup('bdd');

describe(`Validate my Password`, function () {
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

  it('test', () => {
    equal(validPass('Username123'), 'VALID');
    equal(validPass('Username'), 'INVALID');
    equal(validPass('1Username'), 'VALID');
    equal(validPass('123'), 'INVALID');
    equal(validPass('a12'), 'INVALID');
    equal(validPass('1234'), 'INVALID');
    equal(validPass('a123'), 'VALID');
    equal(validPass('Username123!'), 'INVALID');
    equal(validPass('passw0rdIsntTooLong'), 'VALID');
    equal(validPass('passw0rd1CharTooLong'), 'INVALID');
  });
});

mocha.run();
