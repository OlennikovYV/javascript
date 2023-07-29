mocha.setup('bdd');

describe(`Word to binary`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('man', () => {
    deepEqual(
      wordToBin('man'),
      ['01101101', '01100001', '01101110'],
      "should return [ '01101101', '01100001', '01101110' ] for `man` "
    );
  });
  it('AB', () => {
    deepEqual(
      wordToBin('AB'),
      ['01000001', '01000010'],
      "should return ['01000001', '01000010'] for `AB`"
    );
  });
  it('wecking', () => {
    deepEqual(
      wordToBin('wecking'),
      [
        '01110111',
        '01100101',
        '01100011',
        '01101011',
        '01101001',
        '01101110',
        '01100111',
      ],
      "should return [ '01110111', '01100101', '01100011', '01101011', '01101001', '01101110', '01100111' ]  for `wecking`"
    );
  });
  it('Ruby', () => {
    deepEqual(
      wordToBin('Ruby'),
      ['01010010', '01110101', '01100010', '01111001'],
      "should return [ '01010010', '01110101', '01100010', '01111001' ]  for `Ruby`"
    );
  });
  it('Yosemite', () => {
    deepEqual(
      wordToBin('Yosemite'),
      [
        '01011001',
        '01101111',
        '01110011',
        '01100101',
        '01101101',
        '01101001',
        '01110100',
        '01100101',
      ],
      "should return [ '01011001', '01101111', '01110011', '01100101', '01101101', '01101001', '01110100', '01100101' ]  for `Yosemite`"
    );
  });
});

mocha.run();
