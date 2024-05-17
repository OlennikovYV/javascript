mocha.setup('bdd');

describe(`Parsing Commandline Arguments`, function () {
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
    deepEqual(args('ls -R /'), ['ls', '-R', '/'], 'failed parsing "ls -R /"');
    deepEqual(
      args('cat /tmp/data.txt | less'),
      ['cat', '/tmp/data.txt'],
      'failed parsing command with pipe (|) operator'
    );
  });
});

mocha.run();
