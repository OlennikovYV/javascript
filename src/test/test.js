mocha.setup('bdd');

describe(`Elapsed Seconds`, function () {
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

  it('sample tests', () => {
    const start = new Date(2013, 1, 1, 0, 0, 1);
    const end = new Date(2013, 1, 1, 0, 0, 2);
    const end2 = new Date(2013, 1, 1, 0, 0, 20);
    const end3 = new Date(2013, 1, 1, 0, 1, 20);

    equal(elapsedSeconds(start, end), 1);
    equal(elapsedSeconds(start, end2), 19);
    equal(elapsedSeconds(start, end3), 79);
  });
});

mocha.run();
