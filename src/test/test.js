mocha.setup('bdd');

describe('Grasshopper - Debug', function () {
  it('should get correct answer', function () {
    chai.expect(weatherInfo(50)).to.equal('10 is above freezing temperature');
    chai.expect(weatherInfo(23)).to.equal('-5 is freezing temperature');
  });
});

mocha.run();
