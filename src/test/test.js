mocha.setup('bdd');

describe(`Turn String Input into Hash`, function () {
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

  it('should pass sample tests', () => {
    deepEqual(strToHash('a=1, b=2, c=3, d=4'), {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    });
    deepEqual(strToHash(''), {});
  });
});

mocha.run();
