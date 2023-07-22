mocha.setup('bdd');

describe(`Complete The Pattern #5 - Even Ladder`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('n=2', () => {
    equal(pattern(2), '22');
  });
  it('n=1', () => {
    equal(pattern(1), '');
  });
  it('n=5', () => {
    equal(pattern(5), '22\n4444');
  });
  it('n=0', () => {
    equal(pattern(0), '');
  });
  it('n=-25', () => {
    equal(pattern(-25), '');
  });
});

mocha.run();
