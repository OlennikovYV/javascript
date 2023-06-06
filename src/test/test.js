mocha.setup('bdd');

describe(`Password validator`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('test', () => {
    equal(password('Abcd1234'), true);
    equal(password('Abcd123'), false);
    equal(password('abcd1234'), false);
    equal(password('AbcdefGhijKlmnopQRsTuvwxyZ1234567890'), true);
    equal(password('ABCD1234'), false);
    equal(password('Ab1!@#$%^&*()-_+={}[]|:;?/>.<,'), true);
    equal(password('!@#$%^&*()-_+={}[]|:;?/>.<,'), false);
  });
});

mocha.run();
