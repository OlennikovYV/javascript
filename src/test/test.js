mocha.setup('bdd');

describe(`String Scramble`, function () {
  const equal = chai.assert.equal;
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
    equal(scramble('abcd', [0, 3, 1, 2]), 'acdb', 'Should return acdb');
    equal(
      scramble('sc301s', [4, 0, 3, 1, 5, 2]),
      'c0s3s1',
      'Should return c0s3s1'
    );
    equal(scramble('bskl5', [2, 1, 4, 3, 0]), '5sblk', 'Should return 5sblk');
  });
});

mocha.run();
