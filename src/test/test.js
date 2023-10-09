mocha.setup('bdd');

describe(`Which are in?`, function () {
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
    a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

    a1 = ['xyz', 'live', 'strong'];
    deepEqual(inArray(a1, a2), ['live', 'strong']);

    a1 = ['live', 'strong', 'arp'];
    deepEqual(inArray(a1, a2), ['arp', 'live', 'strong']);

    a1 = ['tarp', 'mice', 'bull'];
    deepEqual(inArray(a1, a2), []);
  });
});

mocha.run();
