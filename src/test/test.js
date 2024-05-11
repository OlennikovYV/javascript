mocha.setup('bdd');

describe(`Lazily executing a function`, function () {
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

  it('sample tests', () => {
    function add(a, b) {
      return a + b;
    }

    function double(n) {
      return n * 2;
    }

    function superAdd(...args) {
      return args.reduce((sum, x) => sum + x, 0);
    }

    let lazy_value = makeLazy(add, 2, 3);
    equal(lazy_value(), 5);
    lazy_value = makeLazy(double, 5);
    equal(lazy_value(), 10);
    lazy_value = makeLazy(superAdd, 1, 2, 3, 4, 5);
    equal(lazy_value(), 15);
  });
});

mocha.run();
