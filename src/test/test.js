mocha.setup('bdd');

describe('Return String of First Characters', () => {
  it('test', () => {
    chai.expect(makeString('sees eyes xray yoat')).to.equal('sexy');
    chai.expect(makeString('brown eyes are nice')).to.equal('bean');
    chai.expect(makeString('cars are very nice')).to.equal('cavn');
    chai.expect(makeString('kaks de gan has a big head')).to.equal('kdghabh');
  });
});

mocha.run();
