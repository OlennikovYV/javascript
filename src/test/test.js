mocha.setup('bdd');

const nameTask = `Simple Fun #52: Pair Of Shoes`;

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

  function doTest(shoes, expected) {
    const log = `for shoes: ${JSON.stringify(shoes)}\n`;
    const actual = pairOfShoes(shoes);

    strictEqual(actual, expected, log);
  }

  it('It should work for basic tests.', function () {
    doTest(
      [
        [0, 20],
        [0, 21],
        [1, 19],
        [1, 22],
      ],
      false
    );
    doTest(
      [
        [0, 21],
        [1, 23],
        [1, 21],
        [0, 23],
      ],
      true
    );
    doTest(
      [
        [0, 23],
        [1, 23],
        [1, 23],
        [0, 23],
        [0, 23],
        [0, 23],
      ],
      false
    );
    doTest(
      [
        [0, 21],
        [1, 23],
        [1, 21],
        [1, 23],
      ],
      false
    );
    doTest(
      [
        [0, 23],
        [1, 21],
        [1, 23],
        [0, 21],
        [1, 22],
        [0, 22],
      ],
      true
    );
    doTest(
      [
        [0, 23],
        [1, 21],
        [1, 23],
        [0, 21],
      ],
      true
    );
    doTest(
      [
        [0, 23],
        [1, 21],
        [1, 23],
        [0, 21],
      ],
      true
    );
    doTest([[0, 23]], false);
    doTest(
      [
        [0, 23],
        [1, 23],
      ],
      true
    );
    doTest(
      [
        [0, 23],
        [1, 22],
      ],
      false
    );
    doTest([[0, 23]], false);
  });
});

mocha.run();
