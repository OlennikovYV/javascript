mocha.setup('bdd');

describe(`TV channels`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('Testing', () => {
    deepEqual(
      redarr(['BBC1', 'BBC2', 'MTV']),
      { 0: 'BBC1', 1: 'BBC2', 2: 'MTV' },
      "should return {'0': 'BBC1','1': 'BBC2','2': 'MTV'}"
    );
    deepEqual(
      redarr(['BBC1', 'BBC1', 'BBC2', 'MTV']),
      { 0: 'BBC1', 1: 'BBC2', 2: 'MTV' },
      "should return {'0': 'BBC1','1': 'BBC2','2': 'MTV'}"
    );
    deepEqual(
      redarr([
        'Channel 5',
        'CNN',
        'Discovery',
        'SkyNews',
        'National Geographic',
        'CNBC',
        'Food Network',
        'CNBC',
        'Discovery',
        'Bloomberg TV',
        'SkyNews',
        'MTV',
        'BBC1',
        'SyFy',
        'BBC1',
        'BBC Sport',
      ]),
      {
        0: 'BBC Sport',
        1: 'BBC1',
        2: 'Bloomberg TV',
        3: 'CNBC',
        4: 'CNN',
        5: 'Channel 5',
        6: 'Discovery',
        7: 'Food Network',
        8: 'MTV',
        9: 'National Geographic',
        10: 'SkyNews',
        11: 'SyFy',
      }
    );
  });
});

mocha.run();
