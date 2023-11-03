mocha.setup('bdd');

describe(`Spoonerize Me`, function () {
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

  it('Basic Tests', () => {
    equal(spoonerize('nit picking'), 'pit nicking');
    equal(spoonerize('wedding bells'), 'bedding wells');
    equal(spoonerize('jelly beans'), 'belly jeans');
  });
});

mocha.run();
