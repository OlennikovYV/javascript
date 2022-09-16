mocha.setup('bdd');

describe('Interview Question (easy)', () => {
  it('Tests', function () {
    chai.expect(getStrings('Chicago')).to.equal('c:**,h:*,i:*,a:*,g:*,o:*');
    chai.expect(getStrings('Bangkok')).to.equal('b:*,a:*,n:*,g:*,k:**,o:*');
    chai.expect(getStrings('Las Vegas')).to.equal('l:*,a:**,s:**,v:*,e:*,g:*');
  });
});

mocha.run();
