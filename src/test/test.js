mocha.setup('bdd');

describe(`Strings, strings, strings (Easy)`, function () {
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

  it('should work for my example test cases', () => {
    equal((123).toString(), '123');
    equal(Math.PI.toString(), '3.141592653589793');
    equal(Math.E.toString(), '2.718281828459045');
    equal(true.toString(), 'true');
    equal(false.toString(), 'false');
    equal([1, 2, 3, 4, 5].toString().replace(/\s+/g, ''), '[1,2,3,4,5]');
  });
});

mocha.run();
