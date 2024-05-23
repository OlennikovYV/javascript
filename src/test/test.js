mocha.setup('bdd');

describe(`Image host filename generator`, function () {
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
    for (let i = 0; i < 10; i++) {
      const name = generateName();
      equal(
        typeof name,
        'string',
        `'Name has to be a string. Current type: ${typeof name}'`
      );
      equal(
        photoManager.nameWasUnique(name),
        true,
        `Name has to be unique. Name: ${name}, iteration: ${i + 1}`
      );
      photoManager.addName(name);
      equal(
        name.length,
        6,
        `Name has to be 6 digits long. String ${name} length ${
          name.length
        }, iteration: ${i + 1}`
      );
    }
  });
});

mocha.run();
