mocha.setup('bdd');

describe('String Merge!', () => {
  it('test', () => {
    chai.expect(stringMerge('person', 'here', 'e')).to.equal('pere');
    chai
      .expect(stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j'))
      .to.equal('apowiejouh');
    chai
      .expect(stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x'))
      .to.equal('abcdefxxxyyyxyzz');
    chai
      .expect(stringMerge('12345654321', '123456789', '6'))
      .to.equal('123456789');
    chai
      .expect(stringMerge('JiOdIdA4', 'oopopopoodddasdfdfsd', 'd'))
      .to.equal('JiOdddasdfdfsd');
    chai.expect(stringMerge('incredible', 'people', 'e')).to.equal('increople');
  });
});

mocha.run();
