mocha.setup('bdd');

describe(`Array Mash`, function () {
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

  it('Fixed tests', () => {
    deepEqual(arrayMash([1, 2, 3], ['a', 'b', 'c']), [1, 'a', 2, 'b', 3, 'c']);
    deepEqual(arrayMash([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']), [
      1,
      'a',
      2,
      'b',
      3,
      'c',
      4,
      'd',
      5,
      'e',
    ]);
    deepEqual(arrayMash([1, 1, 1, 1], [2, 2, 2, 2]), [1, 2, 1, 2, 1, 2, 1, 2]);
    deepEqual(arrayMash([1, 8, 'hello', 'dog'], ['fish', '2', 9, 10]), [
      1,
      'fish',
      8,
      '2',
      'hello',
      9,
      'dog',
      10,
    ]);
    deepEqual(arrayMash([null, null, 4], [NaN, null, 'hello']), [
      null,
      NaN,
      null,
      null,
      4,
      'hello',
    ]);
    deepEqual(arrayMash([1], [2]), [1, 2]);
    deepEqual(arrayMash(['h', 'l', 'o', 'o', 'l'], ['e', 'l', 'w', 'r', 'd']), [
      'h',
      'e',
      'l',
      'l',
      'o',
      'w',
      'o',
      'r',
      'l',
      'd',
    ]);
  });
});

mocha.run();
