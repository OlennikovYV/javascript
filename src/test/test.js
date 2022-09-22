mocha.setup('bdd');

describe('Looking for a benefactor', () => {
  it('Basic tests', function () {
    chai
      .expect(newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 4800))
      .to.equal(11630);
    chai
      .expect(newAvg([1400.25, 30000.76, 5.56, 7, 9, 11, 15.48, 120.98], 10000))
      .to.equal(58430);

    chai.expect(newAvg([14, 30, 5, 7, 9, 11, 16], 90)).to.equal(628);
    chai.expect(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).to.equal(645);
  });
});

mocha.run();
