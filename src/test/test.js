mocha.setup('bdd');

describe(`Password Hashes`, function () {
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

  it('test', () => {
    const tests = [
      ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
      ['abc123', 'e99a18c428cb38d5f260853678922e03'],
    ];

    for (let i = 0; i < tests.length; i++) {
      equal(passHash(tests[i][0]), tests[i][1]);
    }
  });
});

mocha.run();
