mocha.setup('bdd');

describe(`Complete The Pattern #3 (Horizontal Image of #2)`, function () {
  const equal = chai.assert.equal;
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

  it('test', () => {
    equal(pattern(1), '1');
    equal(pattern(2), '2\n21');
    equal(pattern(5), '5\n54\n543\n5432\n54321');
  });
});

mocha.run();
