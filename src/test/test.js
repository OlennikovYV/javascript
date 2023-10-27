mocha.setup('bdd');

describe(`Training JS #27: methods of arrayObject---filter()`, function () {
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
    equal(area(5, 4), 12);
    equal(area(10, 6), 48);
    equal(area(13, 5), 60);
    equal(area(12, 5), 54.54);
    equal(area(12, 12), 'Not a rectangle');
  });
});

mocha.run();
