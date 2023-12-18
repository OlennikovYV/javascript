mocha.setup('bdd');

describe(`CompoundArray`, function () {
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

  it('test', () => {
    deepEqual(
      compoundArray([11, 12], [21, 22, 23, 24]),
      [11, 21, 12, 22, 23, 24]
    );
    deepEqual(
      compoundArray(
        [2147483647, 2147483646, 2147483645, 2147483644, 2147483643],
        [9]
      ),
      [2147483647, 9, 2147483646, 2147483645, 2147483644, 2147483643]
    );
    deepEqual(
      compoundArray([214, 215, 216, 217, 218], []),
      [214, 215, 216, 217, 218]
    );
    deepEqual(
      compoundArray([], [314, 315, 316, 317, 318]),
      [314, 315, 316, 317, 318]
    );
  });
});

mocha.run();
