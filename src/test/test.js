mocha.setup('bdd');

const nameTask = `Bits Battle`;

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

  function doTest(array, expected) {
    const actual = bitsBattle(array);
    equal(
      actual,
      expected,
      `for [${array}] expected '${expected}' but got '${actual}'`
    );
  }

  it('Basic tests', function () {
    doTest([5, 3, 14], 'odds win');
    doTest([3, 8, 22, 15, 78], 'evens win');
    doTest([], 'tie');
    doTest([1, 13, 16], 'tie');
    doTest([0], 'tie');
    doTest([0, 1, 2], 'tie');
  });
});

mocha.run();
