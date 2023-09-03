mocha.setup('bdd');

describe(`Playing with Sets : Intersection`, function () {
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
    let A = new Set([1, 2]),
      B = new Set([2, 3]),
      C = new Set([2]),
      AB = inter(A, B);

    deepEqual(inter(A, A), A, 'A inter A == A');

    deepEqual(AB, C);
    deepEqual(
      [...AB].sort(),
      [...inter(B, A)].sort(),
      'A inter B == B inter A'
    );

    isTrue(AB instanceof Set, true, 'A inter B should be a Set too');
  });
});

mocha.run();
