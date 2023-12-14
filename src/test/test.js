mocha.setup('bdd');

describe(`Tea for two`, function () {
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
    equal(tea42(2), 't', 'Twos you lose!');
    equal(tea42('2'), 't', 'Twos you lose!');
    equal(tea42(102), '10t', 'Twos you lose!');
    equal(tea42('m2'), 'mt', 'Twos you lose!');
    equal(tea42('pre2ty'), 'pretty', 'Twos you lose!');
    equal(tea42('t22222'), 'tttttt', 'Twos you lose!');
  });
});

mocha.run();
