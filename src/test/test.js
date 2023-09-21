mocha.setup('bdd');

describe(`RaNDoM CAsE`, function () {
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
    let v = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Donec eleifend cursus lobortis',
      'THIS IS AN ALL CAPS STRING',
      'this is an all lower string',
    ];

    for (let i in v) {
      let r = randomCase(v[i]);
      equal(r.toLowerCase(), v[i].toLowerCase());
      notEqual(r, v[i]);
      notEqual(r, v[i].toUpperCase());
      notEqual(r, v[i].toLowerCase());
    }
  });
});

mocha.run();
