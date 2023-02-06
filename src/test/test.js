mocha.setup('bdd');

describe('Boiled Eggs', function () {
  it('should calculate the cooking time', function () {
    chai.expect(cookingTime(0)).to.equal(0);
    chai.expect(cookingTime(5)).to.equal(5);
    chai.expect(cookingTime(10)).to.equal(10);
  });
});

mocha.run();
