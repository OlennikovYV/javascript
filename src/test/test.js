mocha.setup('bdd');

describe(`The Book of Mormon`, function () {
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

  it('Sample Tests', () => {
    const tests = [
      [[10, 3, 9], 0],
      [[40, 2, 120], 1],
      [[40, 2, 121], 2],
      [[20000, 2, 7000000000], 12],
    ];

    const test = (input, expected) => {
      equal(mormons(...input), expected, `Test failed for mormons(${input})`);
    };

    for (const [input, expected] of tests) {
      test(input, expected);
    }
  });
});

mocha.run();
