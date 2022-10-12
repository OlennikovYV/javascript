mocha.setup('bdd');

describe('int32 to IPv4', () => {
  it('sample tests', () => {
    chai.expect(int32ToIp(2154959208)).to.equal('128.114.17.104');
    chai.expect(int32ToIp(0)).to.equal('0.0.0.0');
    chai.expect(int32ToIp(2149583361)).to.equal('128.32.10.1');
    chai.expect(int32ToIp(2 ** 32 - 1)).to.equal('255.255.255.255');
  });
});

mocha.run();
