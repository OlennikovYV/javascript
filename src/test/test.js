mocha.setup('bdd');

describe('C.Wars', function () {
  it('sample tests', () => {
    chai.expect(initials('code wars')).to.equal('C.Wars');
    chai.expect(initials('Barack hussain obama')).to.equal('B.H.Obama');
    chai.expect(initials('barack hussain Obama')).to.equal('B.H.Obama');
  });
});

mocha.run();
