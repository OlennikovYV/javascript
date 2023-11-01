mocha.setup('bdd');

describe(`Russian postal code checker`, function () {
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
    isTrue(zipvalidate('198328'));
    isTrue(zipvalidate('310003'));
    isTrue(zipvalidate('424000'));

    isTrue(!zipvalidate('12A483'));
    isTrue(!zipvalidate('1@63'));
    isTrue(!zipvalidate('111'));
    isTrue(!zipvalidate('056879'));
    isTrue(!zipvalidate('1111111'));
  });
});

mocha.run();
