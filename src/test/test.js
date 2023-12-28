mocha.setup('bdd');

describe(`Basics 03: Strings, Numbers and Calculation`, function () {
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

  it('basic tests', function () {
    strictEqual(calculateString(';$%§fsdfsd235??df/sdfgf5gh.000kk0000'), '47');
    strictEqual(calculateString('sdfsd23454sdf*2342'), '54929268');
    strictEqual(
      calculateString('fsdfsd235???34.4554s4234df-sdfgf2g3h4j442'),
      '-210908'
    );
    strictEqual(calculateString('fsdfsd234.4554s4234df+sf234442'), '234676');
    strictEqual(calculateString('a1a2b3c.c0c/a1a0b.cc00c'), '12');
  });
});

mocha.run();
