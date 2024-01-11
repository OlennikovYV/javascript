mocha.setup('bdd');

describe(`Closures and Scopes`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('functions must return correct number', function () {
    var callbacks = createFunctions(5);

    for (var i = 0; i < callbacks.length; i++) {
      equal(callbacks[i](), i, 'Function with index ' + i);
    }
  });
});

mocha.run();
