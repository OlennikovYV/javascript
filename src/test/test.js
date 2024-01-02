mocha.setup('bdd');

describe(`Regexp basics - parsing prices`, function () {
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

  it('Testing for fixed tests', () => {
    strictEqual(''.toCents(), null);
    strictEqual('1'.toCents(), null);
    strictEqual('1.23'.toCents(), null);
    strictEqual('$1'.toCents(), null);
    strictEqual('$1.23'.toCents(), 123);
    strictEqual('$99.99'.toCents(), 9999);
    strictEqual('$12345678.90'.toCents(), 1234567890);
    strictEqual('$9.69'.toCents(), 969);
    strictEqual('$9.70'.toCents(), 970);
    strictEqual('$9.71'.toCents(), 971);
    strictEqual('$1.23\n'.toCents(), null);
    strictEqual('\n$1.23'.toCents(), null);
    strictEqual('$0.69'.toCents(), 69);
    strictEqual('$9.69$4.3.7'.toCents(), null);
    strictEqual('$9.692'.toCents(), null);
  });
});

mocha.run();
