mocha.setup('bdd');

describe(`Duplicate Arguments`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
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
  const error = chai.assert.throws;

  it('test', () => {
    equal(solution(1, 2, 3), false);
    equal(solution(1, 2, 3, 6, 5, 6), true);
    equal(solution('a', 'b', 'c', 'a'), true);
    equal(solution(1, 2, 3, 'a', 'b'), false);
  });
});

mocha.run();
