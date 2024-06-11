mocha.setup('bdd');

const nameTask = `Who has the most money?`;

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

  it('Basic tests', () => {
    const andy = new Student('Andy', 0, 0, 2);
    const stephen = new Student('Stephen', 0, 4, 0);
    const eric = new Student('Eric', 8, 1, 0);
    const david = new Student('David', 2, 0, 1);
    const phil = new Student('Phil', 0, 2, 1);
    const cam = new Student('Cameron', 2, 2, 0);
    const geoff = new Student('Geoff', 0, 3, 0);

    // "What happens if one student has the most money?"
    strictEqual(mostMoney([andy, stephen, eric, david, phil]), 'Eric');
    strictEqual(
      mostMoney([cam, geoff, andy, stephen, eric, david, phil]),
      'Eric'
    );

    // "What happens if there is only one student?"
    strictEqual(mostMoney([andy]), 'Andy');
    strictEqual(mostMoney([stephen]), 'Stephen');

    // "What happens if all students have the same amount of money?"
    strictEqual(mostMoney([cam, geoff]), 'all');
    strictEqual(mostMoney([david, cam, geoff]), 'all');
  });
});

mocha.run();
