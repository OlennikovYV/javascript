mocha.setup('bdd');

describe('Number to digit tiers', function () {
  it('should return the correct array for 420', function () {
    chai.expect(createArrayOfTiers(420)).to.eql(['4', '42', '420']);
  });
  it('should return the correct array for 2017', function () {
    chai.expect(createArrayOfTiers(2017)).to.eql(['2', '20', '201', '2017']);
  });
});

mocha.run();
