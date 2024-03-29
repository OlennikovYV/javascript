mocha.setup('bdd');

describe(`Is valid identifier?`, function () {
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

  it('should return true for valid identifiers', function () {
    equal(isValid('okay_ok1'), true, "Wrong result for 'okay_ok1'");
    equal(isValid('$ok'), true, "Wrong result for '$ok'");
    equal(isValid('___'), true, "Wrong result for '___'");
    equal(isValid('str_STR'), true, "Wrong result for 'str_STR'");
    equal(isValid('myIdentf'), true, "Wrong result for 'myIdentf'");
  });

  it('should return false for invalid identifiers', function () {
    equal(isValid('1ok0okay'), false, "Wrong result for '1ok0okay'");
    equal(isValid('!Ok'), false, "Wrong result for '!Ok'");
    equal(isValid(''), false, 'Wrong result for an empty string');
    equal(isValid('str-str'), false, "Wrong result for 'str-str'");
    equal(isValid('no no'), false, "Wrong result for 'no no'");
  });
});

mocha.run();
