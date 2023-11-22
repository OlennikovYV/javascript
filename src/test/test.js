mocha.setup('bdd');

describe(`101 Dalmatians - squash the bugs, not the dogs!`, function () {
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

  it('Testing for fixed tests', () => {
    equal(howManyDalmatians(26), 'More than a handful!');
    equal(howManyDalmatians(8), 'Hardly any');
    equal(howManyDalmatians(14), 'More than a handful!');
    equal(howManyDalmatians(80), "Woah that's a lot of dogs!");
    equal(howManyDalmatians(100), "Woah that's a lot of dogs!");
    equal(howManyDalmatians(101), '101 DALMATIANS!!!');
  });
});

mocha.run();
