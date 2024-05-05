mocha.setup('bdd');

describe(`Srot the inner ctonnet in dsnnieedcg oredr`, function () {
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

  it('Example tests', function () {
    equal(
      sortTheInnerContent('sort the inner content in descending order'),
      'srot the inner ctonnet in dsnnieedcg oredr'
    );
    equal(sortTheInnerContent('wait for me'), 'wiat for me');
    equal(sortTheInnerContent('this kata is easy'), 'tihs ktaa is esay');
    equal(
      sortTheInnerContent('wccuvg ds s kkbzuhz yyccdkxcpx'),
      'wvuccg ds s kzukhbz yyxpkdcccx'
    );
  });
});

mocha.run();
