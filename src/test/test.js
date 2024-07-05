mocha.setup('bdd');

const nameTask = `Change two-dimensional array`;

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

  it('Fixed tests', function () {
    deepEqual(
      matrix([
        [-1, 4, -5, -9, 3],
        [6, -4, -7, 4, -5],
        [3, 5, 4, -9, -1],
        [1, 5, -7, -8, -9],
        [-3, 2, 1, -5, 6],
      ]),
      [
        [0, 4, -5, -9, 3],
        [6, 0, -7, 4, -5],
        [3, 5, 1, -9, -1],
        [1, 5, -7, 0, -9],
        [-3, 2, 1, -5, 1],
      ]
    );
    deepEqual(
      matrix([
        [-1, 4, -5, -9, 3],
        [6, 8, -7, 4, -5],
        [3, 5, 1, -9, -1],
        [1, 5, -7, 15, -9],
        [-3, 2, 1, -5, -6],
      ]),
      [
        [0, 4, -5, -9, 3],
        [6, 1, -7, 4, -5],
        [3, 5, 1, -9, -1],
        [1, 5, -7, 1, -9],
        [-3, 2, 1, -5, 0],
      ]
    );
    deepEqual(
      matrix([
        [-1, 4, -5, -9, 3, 8],
        [6, 8, -7, 4, -5, -1],
        [3, 5, 1, -9, -1, 6],
        [1, 5, -7, 15, -9, 3],
        [-3, 2, 1, -5, -6, 0],
        [8, 2, 0, -2, 4, -5],
      ]),
      [
        [0, 4, -5, -9, 3, 8],
        [6, 1, -7, 4, -5, -1],
        [3, 5, 1, -9, -1, 6],
        [1, 5, -7, 1, -9, 3],
        [-3, 2, 1, -5, 0, 0],
        [8, 2, 0, -2, 4, 0],
      ]
    );
    deepEqual(
      matrix([
        [1, 1, -5, 5],
        [2, -4, 11, 2],
        [3, 1, -1, 4],
        [2, -6, 8, 10],
      ]),
      [
        [1, 1, -5, 5],
        [2, 0, 11, 2],
        [3, 1, 0, 4],
        [2, -6, 8, 1],
      ]
    );
  });
});

mocha.run();
