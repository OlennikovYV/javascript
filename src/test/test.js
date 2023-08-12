mocha.setup('bdd');

describe(`Capitals first!`, function () {
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

  // it('test', () => {
  //   equal(
  //     capitalsFirst('hey You, Sort me Already!'),
  //     'You, Sort Already! hey me'
  //   );
  // });
});

mocha.run();
