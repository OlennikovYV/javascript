mocha.setup('bdd');

const nameTask = `Making Change`;

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

  const solutions = {
    43: { Q: 1, D: 1, N: 1, P: 3 },
    91: { H: 1, Q: 1, D: 1, N: 1, P: 1 },
  };

  it('should make correct change', function () {
    for (const key in solutions) {
      const answer = makeChange(key);
      for (const a in answer) deepEqual(answer[a], solutions[key][a]);
      for (const b in solutions[key]) deepEqual(answer[b], solutions[key][b]);
    }
  });
});

mocha.run();
