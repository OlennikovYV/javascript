mocha.setup('bdd');

describe('Fruit string calculator', function () {
  it('test', () => {
    chai.expect(calculate('Panda has 48 apples and loses 4')).to.equal(44);
    chai.expect(calculate('Jerry has 34 apples and gains 6')).to.equal(40);
  });
});

mocha.run();
