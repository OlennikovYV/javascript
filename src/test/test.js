mocha.setup('bdd');

describe(`Shared Bit Counter`, function () {
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

  const test = [
    [1, 2, false],
    [16, 8, false],
    [1, 1, false],
    [2, 3, false],
    [7, 10, false],
    [43, 77, true],
    [7, 15, true],
    [23, 7, true],
  ];

  it(`${test.length} fixed tests`, () =>
    test.forEach(([a, b, c]) =>
      equal(sharedBits(a, b), c, `sharedBits(${a}, ${b}) should be equal ${c}`)
    ));
});

mocha.run();
