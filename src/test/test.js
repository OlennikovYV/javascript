mocha.setup('bdd');

const nameTask = `Average Array`;

describe(nameTask, function () {
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
  const noError = chai.assert.doesNotThrow;
  const include = chai.assert.include;
  /* Утверждает, что подмножество включено в надмножество в том же порядке,
    начиная с первого элемента в надмножестве. Использует глубокую проверку
    равенства.
    Например: [{b:1},{a:2}] === [{b:1},{a:2}] */
  const includeDeepOrderedMembers = chai.assert.includeDeepOrderedMembers;

  it('should work for the examples provided in the Description', function () {
    deepEqual(
      avgArray([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]),
      [3, 4, 5, 6]
    );
    deepEqual(
      avgArray([
        [2, 3, 9, 10, 7],
        [12, 6, 89, 45, 3],
        [9, 12, 56, 10, 34],
        [67, 23, 1, 88, 34],
      ]),
      [22.5, 11, 38.75, 38.25, 19.5]
    );
    deepEqual(
      avgArray([
        [1.2, 8.521, 0.4, 3.14, 1.9],
        [2, 4.5, 3.75, 0.987, 1.0],
      ]),
      [1.6, 6.5105, 2.075, 2.0635, 1.45]
    );
  });
});

mocha.run();
