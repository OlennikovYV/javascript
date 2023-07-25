mocha.setup('bdd');

describe(`Is the date today`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('Fund4m3nt41s', () => {
    equal(nerdify('Fund4m3nt41s'), 'Fund4m3nt41s');
  });
  it('Seven', () => {
    equal(nerdify('Seven'), 'S3v3n');
  });
  it('Los Angeles', () => {
    equal(nerdify('Los Angeles'), 'Los 4ng313s');
  });
  it('Seoijselawuue', () => {
    equal(nerdify('Seoijselawuue'), 'S3oijs314wuu3');
  });
});

mocha.run();
