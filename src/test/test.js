mocha.setup('bdd');

describe(`Matrix Addition`, function () {
  const equal = chai.assert.equal;
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

  it('Sample tests', () => {
    deepEqual(
      matrixAddition(
        [
          [1, 2],
          [1, 2],
        ],
        //    +
        [
          [2, 3],
          [2, 3],
        ]
      ),
      //    =
      [
        [3, 5],
        [3, 5],
      ]
    );

    deepEqual(
      matrixAddition(
        [[1]],
        //   +
        [[2]]
      ),
      //   =
      [[3]]
    );

    deepEqual(
      matrixAddition(
        [
          [1, 2, 3],
          [3, 2, 1],
          [1, 1, 1],
        ],
        //      +
        [
          [2, 2, 1],
          [3, 2, 3],
          [1, 1, 3],
        ]
      ),
      //      =
      [
        [3, 4, 4],
        [6, 4, 4],
        [2, 2, 4],
      ]
    );
  });
});

mocha.run();
