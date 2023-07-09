mocha.setup('bdd');

describe(`Thinkful - List and Loop Drills: Inverse Slicer`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('Basic tests', function () {
    deepEqual(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24]);
    deepEqual(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24]);
    deepEqual(
      inverseSlice(
        [
          'Intuition',
          'is',
          'a',
          'poor',
          'guide',
          'when',
          'facing',
          'probabilistic',
          'evidence',
        ],
        5,
        13
      ),
      ['Intuition', 'is', 'a', 'poor', 'guide']
    );
  });
});

mocha.run();
