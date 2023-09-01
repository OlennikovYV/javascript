mocha.setup('bdd');

describe(`Generate user links`, function () {
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

  it('Basic Tests', () => {
    equal(generateLink('matt c'), 'http://www.codewars.com/users/matt%20c');
    equal(generateLink('g964'), 'http://www.codewars.com/users/g964');
    equal(
      generateLink('GiacomoSorbi'),
      'http://www.codewars.com/users/GiacomoSorbi'
    );
    equal(
      generateLink('ZozoFouchtra'),
      'http://www.codewars.com/users/ZozoFouchtra'
    );
    equal(
      generateLink('colbydauph'),
      'http://www.codewars.com/users/colbydauph'
    );
  });
});

mocha.run();
