mocha.setup('bdd');

describe(`Sort deck of cards`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('test', () => {
    deepEqual(sortCards([3, 9, 'A', 5, 'T', 8, 2, 4, 'Q', 7, 'J', 6, 'K']), [
      'A',
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'T',
      'J',
      'Q',
      'K',
    ]);
    deepEqual(sortCards(['J', 'J', 2, 'T', 9, 6]), [2, 6, 9, 'T', 'J', 'J']);
    deepEqual(sortCards(['A', 2, 3, 4, 5, 6, 6, 7, 8, 9, 'T', 'J', 'Q', 'A']), [
      'A',
      'A',
      2,
      3,
      4,
      5,
      6,
      6,
      7,
      8,
      9,
      'T',
      'J',
      'Q',
    ]);
  });
});

mocha.run();
