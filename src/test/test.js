mocha.setup('bdd');

describe('Kata', () => {
  it('Testing with sample tests', function () {
    chai.expect(productArray([12, 20])).to.eql([20, 12]);
    chai.expect(productArray([3, 27, 4, 2])).to.eql([216, 24, 162, 324]);
    chai
      .expect(productArray([13, 10, 5, 2, 9]))
      .to.eql([900, 1170, 2340, 5850, 1300]);
    chai
      .expect(productArray([16, 17, 4, 3, 5, 2]))
      .to.eql([2040, 1920, 8160, 10880, 6528, 16320]);
  });
});

mocha.run();
