mocha.setup('bdd');

describe(`Custom Array Filters`, function () {
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

  it('test', () => {
    deepEqual([1, 2, 3, 4, 5].even(), [2, 4]);
    deepEqual([1, 2, 3, 4, 5].odd(), [1, 3, 5]);
    deepEqual([1, 2, 3, 4, 5].under(4), [1, 2, 3]);
    deepEqual([1, 2, 3, 4, 5].over(4), [5]);
    deepEqual([1, 2, 3, 4, 5].inRange(1, 3), [1, 2, 3]);

    deepEqual(
      [1, 2, 18, 19, 20, 21, 22, 30, 40, 50, 100].even().inRange(18, 30),
      [18, 20, 22, 30]
    );
    deepEqual(
      ['a', 1, 'b', 300, 'x', 'q', 63, 122, 181, 'z', 0.83, 0.11].even(),
      [300, 122]
    );
  });
});

mocha.run();
