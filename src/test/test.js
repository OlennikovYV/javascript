mocha.setup('bdd');

describe(`Sum of a Sequence [Hard-Core Version]`, function () {
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

  it('test', () => {
    equal(sequenceSum(2, 6, 2), 12);
    equal(sequenceSum(1, 5, 1), 15);
    equal(sequenceSum(1, 5, 3), 5);
    equal(sequenceSum(-1, -5, -3), -5);
    equal(sequenceSum(16, 15, 3), 0);
    equal(sequenceSum(-24, -2, 22), -26);
    equal(sequenceSum(-2, 4, 658), -2);
    equal(sequenceSum(780, 68515438, 5), 469436517521190);
    equal(sequenceSum(9383, 71418, 2), 1253127200);
    equal(sequenceSum(20, 67338879, 5), 453452442295970);
    equal(sequenceSum(27370145, -0, -6), 62427083461825);
  });
});

mocha.run();
