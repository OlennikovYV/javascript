mocha.setup('bdd');

describe(`IP Address to Number`, function () {
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

  it('ipToNum', () => {
    strictEqual(ipToNum('192.168.1.1'), 3232235777);
    strictEqual(ipToNum('10.0.0.0'), 167772160);
    strictEqual(ipToNum('176.16.0.1'), 2953838593);
  });
  it('numToIp', () => {
    strictEqual(numToIp(3232235777), '192.168.1.1');
    strictEqual(numToIp(167772160), '10.0.0.0');
    strictEqual(numToIp(2953838593), '176.16.0.1');
  });
  it('Combined', () => {
    strictEqual(numToIp(ipToNum('192.168.1.1')), '192.168.1.1');
    strictEqual(numToIp(ipToNum('10.0.0.0')), '10.0.0.0');
    strictEqual(numToIp(ipToNum('176.16.0.1')), '176.16.0.1');
    strictEqual(ipToNum(numToIp(3232235777)), 3232235777);
    strictEqual(ipToNum(numToIp(167772160)), 167772160);
    strictEqual(ipToNum(numToIp(2953838593)), 2953838593);
  });
});

mocha.run();
