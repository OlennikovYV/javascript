mocha.setup('bdd');

describe(`Compare Versions`, function () {
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
  const include = chai.assert.include;

  it('Testing versions without subversion', () =>
    isTrue(compareVersions('11', '10')));

  it('Test equal versions', () => isTrue(compareVersions('11', '11')));

  it('Adding a subversion should make this version "larger"', () =>
    isTrue(compareVersions('10.4.6', '10.4')));

  it('Subversion precedence is smaller than Version', () =>
    isFalse(compareVersions('10.4', '11')));

  it('Version value is not the same as its decimal value', () =>
    isFalse(compareVersions('10.4', '10.10')));

  it('Adding subversion does not make it larger than a greater version', () =>
    isFalse(compareVersions('10.4.9', '10.5')));
});

mocha.run();
