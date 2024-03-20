mocha.setup('bdd');

describe(`Who Took The Car Key?`, function () {
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
    strictEqual(
      whoTookTheCarKey([
        '01000001',
        '01101100',
        '01100101',
        '01111000',
        '01100001',
        '01101110',
        '01100100',
        '01100101',
        '01110010',
      ]),
      'Alexander'
    );
  });
});

mocha.run();
