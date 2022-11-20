mocha.setup('bdd');

describe('L2: Triple X', () => {
  it('Testing for fixed tests', () => {
    chai.expect(tripleX('abraxxxas')).to.equal(true);
    chai.expect(tripleX('xoxotrololololololoxxx')).to.equal(false);
    chai.expect(tripleX('soft kitty, warm kitty, xxxxx')).to.equal(true);
    chai.expect(tripleX('softx kitty, warm kitty, xxxxx')).to.equal(false);
  });
});

mocha.run();
