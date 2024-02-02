mocha.setup('bdd');

describe(`Square Matrix Multiplication`, function () {
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
    deepEqual(
      matrixMultiplication(
        [
          [1, 2],
          [3, 2],
        ],
        [
          [3, 2],
          [1, 1],
        ]
      ),
      [
        [5, 4],
        [11, 8],
      ]
    );
  });
});

mocha.run();
