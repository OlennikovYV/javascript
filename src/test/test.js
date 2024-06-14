mocha.setup('bdd');

const nameTask = `Arguments to Binary addition`;

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
    let actual = arr2bin([1, 2]);
    isDefined(actual);
    strictEqual(actual, '11');
    strictEqual(arr2bin([1, 2, 3, 4, 5]), '1111');
    strictEqual(arr2bin([1, 10, 100, 1000]), '10001010111');
    strictEqual(arr2bin([null]), '0');
    strictEqual(arr2bin([1, null]), '1');
    strictEqual(arr2bin([true, true, false, 15]), '1111');
    strictEqual(arr2bin([NaN]), 'NaN');
    strictEqual(arr2bin([null, 7, 9, null]), '10000');
    strictEqual(arr2bin([]), '0');
    strictEqual(arr2bin([2, 2, null, 1]), '101');
  });
});

mocha.run();
