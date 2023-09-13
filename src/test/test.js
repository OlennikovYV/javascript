mocha.setup('bdd');

describe(`The old switcheroo 2`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('Initial Tests', () => {
    equal(encode('abc'), '123');
    equal(encode('ABCD'), '1234');
    equal(encode('ZzzzZ'), '2626262626');
    equal(encode('abc-#@5'), '123-#@5');
  });
});

mocha.run();
