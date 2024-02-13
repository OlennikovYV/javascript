mocha.setup('bdd');

describe(`All Star Code Challenge #15`, function () {
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
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('test', () => {
    const resultArray = ['elloH', 'lloHe', 'loHel', 'oHell', 'Hello'];
    const testOut = rotate('Hello');

    deepEqual(testOut, resultArray);

    include(testOut, 'elloH', 'Array does not contain elloH');
    include(testOut, 'lloHe', 'Array does not contain lloHe');
    include(testOut, 'loHel', 'Array does not contain loHel');
    include(testOut, 'oHell', 'Array does not contain oHell');
    include(testOut, 'Hello', 'Array does not contain Hello');
  });
});

mocha.run();
