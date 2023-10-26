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
    deepEqual(countGrade([50, 60, 70, 80, 90, 100]), {
      S: 1,
      A: 1,
      B: 1,
      C: 2,
      D: 1,
      X: 0,
    });
    deepEqual(countGrade([65, 75, , 85, 85, 95, 100, 100]), {
      S: 2,
      A: 1,
      B: 2,
      C: 2,
      D: 0,
      X: 0,
    });
    deepEqual(countGrade([-1, -1, -1, -1, -1, -1]), {
      S: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      X: 6,
    });
  });
});

mocha.run();
