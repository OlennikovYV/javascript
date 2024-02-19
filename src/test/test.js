mocha.setup('bdd');

describe(`ASCII letters from Number`, function () {
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
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('tests', () => {
    equal(convert('65'), 'A');
    equal(convert('656667'), 'ABC');
    equal(convert('676584'), 'CAT');
    equal(convert('73327673756932858080698267658369'), 'I LIKE UPPERCASE');
  });
});

mocha.run();
