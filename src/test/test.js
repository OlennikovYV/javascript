mocha.setup('bdd');

describe('Sum ALL the arrays!', function () {
  it('test', () => {
    chai.expect(arraySum([1, 2])).to.equal(3);
    chai.expect(arraySum([1, 2, 3])).to.equal(6);
    chai.expect(arraySum([1, 2, [1, 2]])).to.equal(6);
  });
});

mocha.run();
