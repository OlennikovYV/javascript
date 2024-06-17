mocha.setup('bdd');

const nameTask = `Vampire Numbers`;

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
    strictEqual(
      vampireTest(21, 6),
      true,
      'Basic: 21 * 6 = 126 should return true'
    );
    strictEqual(
      vampireTest(204, 615),
      true,
      'Basic: 204 * 615 = 125460 should return true'
    );
    strictEqual(
      vampireTest(30, -51),
      true,
      'One Negative: 30 * -51 = -1530 should return true'
    );
    strictEqual(
      vampireTest(-246, -510),
      false,
      "Double Negatives: -246 * -510 = 125460 should return false (The negative signs aren't present on the product)"
    );
    strictEqual(
      vampireTest(2947050, 8469153),
      true,
      'Large: 2947050 * 8469153 = 24959017348650 should return true'
    );
    strictEqual(
      vampireTest(2947051, 8469153),
      false,
      'Large: 2947051 * 8469153 = 24959025817803 should return false'
    );
  });
});

mocha.run();
