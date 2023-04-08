mocha.setup('bdd');

describe('Be Concise I - The Ternary Operator', function () {
  it(
    'should still exhibit the exact same behaviour as the ' +
      'function prior to refactoring',
    () => {
      chai.expect(describeAge(9)).to.equal("You're a(n) kid");
      chai.expect(describeAge(10)).to.equal("You're a(n) kid");
      chai.expect(describeAge(11)).to.equal("You're a(n) kid");
      chai.expect(describeAge(12)).to.equal("You're a(n) kid");
      chai.expect(describeAge(13)).to.equal("You're a(n) teenager");
      chai.expect(describeAge(14)).to.equal("You're a(n) teenager");
      chai.expect(describeAge(15)).to.equal("You're a(n) teenager");
      chai.expect(describeAge(16)).to.equal("You're a(n) teenager");
      chai.expect(describeAge(17)).to.equal("You're a(n) teenager");
      chai.expect(describeAge(18)).to.equal("You're a(n) adult");
      chai.expect(describeAge(19)).to.equal("You're a(n) adult");
      chai.expect(describeAge(63)).to.equal("You're a(n) adult");
      chai.expect(describeAge(64)).to.equal("You're a(n) adult");
      chai.expect(describeAge(65)).to.equal("You're a(n) elderly");
      chai.expect(describeAge(66)).to.equal("You're a(n) elderly");
      chai.expect(describeAge(100)).to.equal("You're a(n) elderly");
    }
  );
});

mocha.run();
