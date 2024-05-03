mocha.setup('bdd');

describe(`Invalid Login - Bug Fixing #11`, function () {
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

  it('Successfully Logged in!', function () {
    equal(
      validate('Timmy', 'password'),
      'Successfully Logged in!',
      'Should successfully login!'
    );
    equal(
      validate('Alice', 'alice'),
      'Successfully Logged in!',
      'Should successfully login!'
    );
  });
  it('The password was wrong', function () {
    equal(
      validate('Timmy', 'h4x0r'),
      'Wrong username or password!',
      'The password was wrong'
    );
    equal(
      validate('Timmy', 'password"||""=="'),
      'Wrong username or password!',
      'Should fail to login because of injected code'
    );
    equal(
      validate('Admin', 'gs5bw"||1==1//'),
      'Wrong username or password!',
      'Should fail to login because of injected code'
    );
  });
});

mocha.run();
