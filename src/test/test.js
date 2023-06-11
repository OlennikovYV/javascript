mocha.setup('bdd');

describe(`String to integer conversion`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('test', () => {
    equal(myParseInt('1'), 1);
    equal(myParseInt('  1 '), 1);
    equal(myParseInt('08'), 8);
    equal(isNaN(myParseInt('5 friends')), true);
    equal(isNaN(myParseInt('16.5')), true);
  });
});

mocha.run();
