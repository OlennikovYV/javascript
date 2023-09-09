mocha.setup('bdd');

describe(`Can Santa save Christmas?`, function () {
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
    equal(determineTime(['00:30:00', '02:30:00', '00:15:00']), true);
    equal(determineTime([]), true);
    equal(
      determineTime(['04:30:00', '02:00:00', '01:30:00', '16:00:00']),
      true
    );
    equal(determineTime(['12:00:00', '12:00:00']), true);
    equal(determineTime(['12:00:00', '12:00:01']), false);
    equal(determineTime(['06:00:00', '12:00:00', '06:30:00']), false);
  });
});

mocha.run();
