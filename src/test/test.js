mocha.setup('bdd');

describe(`Training JS #26: methods of arrayObject---map()`, function () {
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

  it('test', () => {
    deepEqual(isolateIt(['abcd', 'efgh']), ['ab|cd', 'ef|gh']);
    deepEqual(isolateIt(['abcde', 'fghij']), ['ab|de', 'fg|ij']);
    deepEqual(isolateIt(['1234', '56789']), ['12|34', '56|89']);
  });
});

mocha.run();
