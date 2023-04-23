mocha.setup('bdd');

describe(`Training JS #31: methods of arrayObject---
  isArray() indexOf() and toString()`, function () {
  const assert = chai.assert;

  it('test', () => {
    assert.equal(blackAndWhite(5, 13), "It's a fake array");
    assert.equal(blackAndWhite([5, 13]), "It's a black array");
    assert.equal(blackAndWhite([5, 12]), "It's a white array");
  });
});

mocha.run();
