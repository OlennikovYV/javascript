mocha.setup('bdd');

const nameTask = `Beeramid`;

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

  it('Fixed Tests', () => {
    equal(beeramid(9, 2), 1);
    equal(beeramid(10, 2), 2);
    equal(beeramid(11, 2), 2);
    equal(beeramid(21, 1.5), 3);
    equal(beeramid(454, 5), 5);
    equal(beeramid(455, 5), 6);
    equal(beeramid(4, 4), 1);
    equal(beeramid(3, 4), 0);
    equal(beeramid(0, 4), 0);
    equal(beeramid(-1, 4), 0);
  });
});

mocha.run();
