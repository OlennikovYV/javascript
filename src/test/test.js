mocha.setup('bdd');

const nameTask = `Geometric sequence - sum of all elements`;

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
    equal(GeometricSequenceSum(2, 3, 5), 242);
    equal(GeometricSequenceSum(1, 1, 2), 2);
    equal(GeometricSequenceSum(2, 2, 10), 2046);
    equal(GeometricSequenceSum(1, -2, 10), -341);
    equal(GeometricSequenceSum(1, 0.5, 10), 1.998046875);
  });
});

mocha.run();
