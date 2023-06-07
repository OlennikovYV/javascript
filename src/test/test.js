mocha.setup('bdd');

describe(`String Reversing, Changing case, etc.`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('should test for some strings', function () {
    s1 = 'FizZ';
    s2 = 'buZZ';
    equal(reverseAndMirror(s1, s2), 'zzUB@@@zZIffIZz');
  });

  it('should test for some strings', function () {
    s1 = 'String Reversing';
    s2 = 'Changing Case';
    equal(
      reverseAndMirror(s1, s2),
      'ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING'
    );
  });
});

mocha.run();
