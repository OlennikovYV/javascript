mocha.setup('bdd');

describe(`String basics`, function () {
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

  it('test', () => {
    deepEqual(getUsersIds('uid12345'), ['12345']);
    deepEqual(getUsersIds('   uidabc  '), ['abc']);
    deepEqual(getUsersIds('#uidswagger'), ['swagger']);
    deepEqual(getUsersIds('uidone, uidtwo'), ['one', 'two']);
    deepEqual(getUsersIds('uidCAPSLOCK'), ['capslock']);

    deepEqual(getUsersIds('uid##doublehashtag'), ['doublehashtag']);
    deepEqual(getUsersIds('  uidin name whitespace'), ['in name whitespace']);
    deepEqual(getUsersIds('uidMultipleuid'), ['multipleuid']);
    deepEqual(getUsersIds('uid12 ab, uid#, uidMiXeDcHaRs'), [
      '12 ab',
      '',
      'mixedchars',
    ]);
    deepEqual(getUsersIds(' uidT#e#S#t# '), ['test']);
    deepEqual(
      getUsersIds(
        'uid123456, uidHAx0r, uidhAx#0R, uidHax0r  , uid 1234567890, uid12 34, uidhaX0r, uid12345  67, uid12345 67890, uid123456, uidm#y_iD'
      ),
      [
        '123456',
        'hax0r',
        'hax0r',
        'hax0r',
        '1234567890',
        '12 34',
        'hax0r',
        '12345  67',
        '12345 67890',
        '123456',
        'my_id',
      ]
    );
    deepEqual(
      getUsersIds(
        'uidhaX0#r, uid  1234567, uid12345  , uidUser, uid1234567 89#, uid123'
      ),
      ['hax0r', '1234567', '12345', 'user', '1234567 89', '123']
    );
  });
});

mocha.run();
