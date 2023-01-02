mocha.setup('bdd');

describe(`Heron's formula`, () => {
  it('Fixed tests', function () {
    chai.expect(heron(3, 4, 5)).to.equal(6);
    chai.expect(heron(6, 8, 10)).to.equal(24);
  });
});

mocha.run();
