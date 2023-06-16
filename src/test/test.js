mocha.setup('bdd');

describe(`Regexp Basics - is it IPv4 address?`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;

  it('Should return true', () => {
    isTrue('127.0.0.1'.ipv4Address());
    isTrue('0.0.0.0'.ipv4Address());
    isTrue('255.255.255.255'.ipv4Address());
    isTrue('10.20.30.40'.ipv4Address());
  });
  it('Should return false', () => {
    isFalse(''.ipv4Address());
    isFalse('10.256.30.40'.ipv4Address());
    isFalse('10.20.030.40'.ipv4Address());
    isFalse('127.0.1'.ipv4Address());
    isFalse('127.0.0.0.1'.ipv4Address());
    isFalse('..255.255'.ipv4Address());
    isFalse('127.0.0.1\n'.ipv4Address());
    isFalse('\n127.0.0.1'.ipv4Address());
    isFalse(' 127.0.0.1'.ipv4Address());
    isFalse('127.0.0.1 '.ipv4Address());
    isFalse(' 127.0.0.1 '.ipv4Address());
    isFalse('127.0.0.1.'.ipv4Address());
    isFalse('.127.0.0.1'.ipv4Address());
    isFalse('127..0.1'.ipv4Address());
  });
});

mocha.run();
