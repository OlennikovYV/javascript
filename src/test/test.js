mocha.setup('bdd');

describe(`Is it a letter?`, function () {
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

  it('example tests', function () {
    equal(isItLetter('Z'), true, `'Z' is a letter`);
    equal(isItLetter('a'), true, `'a' is a letter`);
    equal(isItLetter('1'), false, `'1' is not a letter`);
  });
});

mocha.run();
