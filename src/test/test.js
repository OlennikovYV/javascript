mocha.setup('bdd');

describe('Chuck Norris VII - True or False? (Beginner)', function () {
  it('Only one test', () => {
    const assert = chai.assert;
    assert.strictEqual(ifChuckSaysSo(), false);
  });
});

mocha.run();
