mocha.setup('bdd');

const nameTask = `Finding length of the sequence`;

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
  /* Утверждает, что объект правдив
     Например: 'Что-нибудь' === правдив */
  const isOk = chai.assert.isOk;
  const approximately = chai.assert.approximately;
  /* Утверждает, что целевое значение соответствует
     ожидаемому в пределах диапазона +/- дельта */
  const closeTo = chai.assert.closeTo;
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
    equal(lengthOfSequence([1], 0), 0);
    equal(lengthOfSequence([1], 1), 0);
    equal(
      lengthOfSequence([1, 1], 1),
      2,
      'Returns two when there are only two elements in the array'
    );
    equal(
      lengthOfSequence([1, 2, 3, 1], 1),
      4,
      'Returns four for an array of length four and the number to be searched at the boundaries'
    );
    equal(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, 'Returns five');
    equal(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, 'Returns four');
    equal(lengthOfSequence([-7, 3, -7, -7, 2, 1], -7), 0);
  });
});

mocha.run();
