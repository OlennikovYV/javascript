mocha.setup('bdd');

describe(`Loose Change!`, function () {
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

  it('example tests', () => {
    equal(compose(multTwo, addOne)(5), 12, 'compose two functions');
    equal(
      compose(addOne, multTwo, addOne, addOne)(2),
      9,
      'compose four functions'
    );
    equal(compose(addOne)(3), 4, 'compose one function');
    equal(compose()(10), 10, 'compose no functions');
  });
});

mocha.run();
