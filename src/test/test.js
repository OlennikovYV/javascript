mocha.setup('bdd');

describe('Especially Joyful Numbers', () => {
  it('numberJoy', function () {
    chai.expect(numberJoy(1997)).to.equal(false);
    chai.expect(numberJoy(1998)).to.equal(false);
    chai.expect(numberJoy(1729)).to.equal(true);
    chai.expect(numberJoy(18)).to.equal(false);
    chai.expect(numberJoy(1)).to.equal(true);
    chai.expect(numberJoy(81)).to.equal(true);
    chai.expect(numberJoy(1458)).to.equal(true);
  });
});

mocha.run();
