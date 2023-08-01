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

  const objA = { a: 10, b: 20, c: 30 };
  const objB = { a: 3, c: 6, d: 3 };
  const objC = { a: 5, d: 11, e: 8 };
  const objD = { c: 3 };

  it('Combine two objects', () => {
    deepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 });
    deepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 });
  });

  it('Combine three objects', () => {
    deepEqual(combine(objA, objB, objC), {
      a: 18,
      b: 20,
      c: 36,
      d: 14,
      e: 8,
    });
    deepEqual(combine(objA, objC, objD), {
      a: 15,
      b: 20,
      c: 33,
      d: 11,
      e: 8,
    });
  });

  it('Handle empty objects', () => {
    deepEqual(combine({}, {}, {}), {});
    deepEqual(combine(objA, objC, {}), {
      a: 15,
      b: 20,
      c: 30,
      d: 11,
      e: 8,
    });
  });
});

mocha.run();
