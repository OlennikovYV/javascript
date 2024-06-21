mocha.setup('bdd');

const nameTask = `Filter out for good!`;

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

  it('Should pass sample tests', function () {
    let array = [1, 2, 3, 4, 5];
    let predicate = i => i % 2 === 0;
    let removed = array.remove(predicate);

    deepEqual(removed, [2, 4]);
    deepEqual(array, [1, 3, 5]);

    array = [1, 2, 3, 4, 5];
    predicate = i => i % 2 !== 0;
    removed = array.remove(predicate);

    deepEqual(removed, [1, 3, 5]);
    deepEqual(array, [2, 4]);

    array = [2, 2, 2, 2, 2];
    predicate = i => i === 2;
    removed = array.remove(predicate);

    deepEqual(removed, [2, 2, 2, 2, 2]);
    deepEqual(array, []);

    array = ['a', 'b', 'c', 'd', 'e'];
    predicate = i => i >= 'a' && i <= 'd';
    removed = array.remove(predicate);

    deepEqual(removed, ['a', 'b', 'c', 'd']);
    deepEqual(array, ['e']);
  });
});

mocha.run();
