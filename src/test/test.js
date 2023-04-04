mocha.setup('bdd');

describe('Miles per gallon to kilometers per liter', function () {
  it('test', () => {
    chai.expect(converter(10)).to.equal(3.54);
    chai.expect(converter(20)).to.equal(7.08);
    chai.expect(converter(24)).to.equal(8.5);
    chai.expect(converter(30)).to.equal(10.62);
    chai.expect(converter(94)).to.equal(33.28);
    chai.expect(converter(31526)).to.equal(11160.39);
    chai.expect(converter(48960)).to.equal(17332.14);
  });
});

mocha.run();
