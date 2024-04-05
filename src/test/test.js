mocha.setup('bdd');

describe(`Plus - minus - plus - plus - ... - Count`, function () {
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

  const tests = [
    [[], 0],
    [[0], 0],
    [[-7, -7, 7, 0], 1],
    [[1, 3, 4, 5], 0],
    [[-1, -3, -4, -5], 0],
    [[1, -3, -4, 0, 5], 2],
    [[-47, 84, -30, -11, -5, 74, 77], 3],
  ];

  for (let [input, expected] of tests) {
    it(`[${input}]`, function () {
      strictEqual(catchSignChange(input), expected);
    });
  }
});

mocha.run();
