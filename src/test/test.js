mocha.setup('bdd');

const nameTask = `Adjacent repeated words in a string`;

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

  it('test', () => {
    equal(countAdjacentPairs(''), 0, 'An empty string should return 0.');
    equal(
      countAdjacentPairs('orange Orange kiwi pineapple apple'),
      1,
      "Case should be ignored. countAdjacentPairs('orange Orange kiwi pineapple apple')"
    );
    equal(
      countAdjacentPairs('banana banana banana'),
      1,
      "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')"
    );
    equal(
      countAdjacentPairs(
        'banana banana banana terracotta banana terracotta terracotta pie!'
      ),
      2,
      "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')"
    );
    equal(
      countAdjacentPairs('pineapple apple'),
      0,
      "A pineapple is not an apple. countAdjacentPairs('pineapple apple')"
    );
  });
});

mocha.run();
