mocha.setup('bdd');

describe(`Word to binary`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('Fixed tests', () => {
    equal(ensureQuestion(''), '?', "Expected: '?'");
    equal(ensureQuestion('Yes'), 'Yes?', "Expected: '?'");
    equal(ensureQuestion('No?'), 'No?', "Expected: '?'");
  });
});

mocha.run();
