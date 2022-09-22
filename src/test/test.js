mocha.setup('bdd');

describe('Looking for a benefactor', () => {
  it('Basic tests', function () {
    chai.expect(newAvg([14, 30, 5, 7, 9, 11, 16], 90)).to.equal(628);
    chai.expect(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).to.equal(645);

    try {
      newAvg([]);
    } catch (e) {
      chai.expect(e.message).to.equal('Expected New Average is too low');
    }
  });
});

mocha.run();
