mocha.setup('bdd');

describe('Check three and two', () => {
  it('Basic tests', function () {
    chai.expect(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b'])).to.equal(true);
    chai.expect(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b'])).to.equal(false);
    chai.expect(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a'])).to.equal(false);
  });
});

mocha.run();
