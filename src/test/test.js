mocha.setup('bdd');

describe(`Return a sorted list of objects`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  const list = [
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 },
  ];
  const result = [
    { a: 4, b: 12 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 1, b: 3 },
  ];

  it('test', () => {
    deepEqual(sortList('a', list), result);
  });
});

mocha.run();
