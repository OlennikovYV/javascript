mocha.setup('bdd');

describe(`Mispelled word`, function () {
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

  it('Sample Tests', () => {
    equal(mispelled('versed', 'versed'), true);
    equal(mispelled('versed', 'xersed'), true);
    equal(mispelled('versed', 'applb'), false);

    equal(mispelled('versed', 'v5rsed'), true);
    equal(mispelled('1versed', 'versed'), true);
    equal(mispelled('versed', 'versed1'), true);

    equal(mispelled('versed', 'aversed'), true);
    equal(mispelled('aaversed', 'versed'), false);
    equal(mispelled('versed', 'aaversed'), false);
  });
});

mocha.run();
