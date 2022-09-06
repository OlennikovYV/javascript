mocha.setup('bdd');

describe('Tests', () => {
  it('It should work for basic tests', function () {
    chai.expect(product('')).to.equal(0);
    chai.expect(product('!')).to.equal(0);
    chai.expect(product('!!')).to.equal(0);
    chai.expect(product('!??')).to.equal(2);
    chai.expect(product('!???')).to.equal(3);
    chai.expect(product('!!!??')).to.equal(6);
    chai.expect(product('!!!???')).to.equal(9);
    chai.expect(product('!???!!')).to.equal(9);
    chai.expect(product('!ab? ?')).to.equal(2);
    chai.expect(product('!????!!!?')).to.equal(20);
  });
});

mocha.run();
