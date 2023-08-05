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

  it('test', () => {
    //may 3
    equal(
      getVillainName(new Date('May 3')),
      'The Despicable Raisin',
      'Expected result: The Despicable Raisin; Your result: ' +
        getVillainName(new Date('May 13'))
    );

    //apr 1
    equal(
      getVillainName(new Date('April 21')),
      'The Trashy Pickle',
      'Expected result: The Trashy Pickle; Your result: ' +
        getVillainName(new Date('April 21'))
    );

    //dec 7
    equal(
      getVillainName(new Date('December 17')),
      'The Awkward House Cat',
      'Expected result: The Awkward House Cat; Your result: ' +
        getVillainName(new Date('December 17'))
    );
  });
});

mocha.run();
