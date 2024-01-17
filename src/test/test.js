mocha.setup('bdd');

describe(`Mean Square Error`, function () {
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
    equal(solution([1, 2, 3], [4, 5, 6]), 9);
    equal(solution([10, 20, 10, 2], [10, 25, 5, -2]), 16.5);
    equal(solution([0, -1], [-1, 0]), 1);
  });
});

mocha.run();
