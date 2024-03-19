mocha.setup('bdd');

describe(`Holiday VII - Local Talk`, function () {
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

  it('Fixed tests', () => {
    equal(pak('   '), '');
    equal(
      pak('Man I need a taxi up to Ubud'),
      'Man pak I pak need pak a pak taxi pak up pak to pak Ubud'
    );
    equal(
      pak('What time are we climbing up the volcano?'),
      'What pak time pak are pak we pak climbing pak up pak the pak volcano?'
    );
    equal(pak('Take me to Semynak!'), 'Take pak me pak to pak Semynak!');
  });
});

mocha.run();
