mocha.setup('bdd');

describe('Band name generator', function () {
  it('test', () => {
    chai.expect(bandNameGenerator('knife')).to.equal('The Knife');
    chai.expect(bandNameGenerator('tart')).to.equal('Tartart');
    chai.expect(bandNameGenerator('sandles')).to.equal('Sandlesandles');
    chai.expect(bandNameGenerator('bed')).to.equal('The Bed');
  });
});

mocha.run();
