mocha.setup('bdd');

describe(`Training JS #32: methods of Math---round() ceil() and floor()`, function () {
  const assert = chai.assert.equal;

  it('test', () => {
    assert(roundIt(3.45), 4);
    assert(roundIt(34.5), 34);
    assert(roundIt(34.56), 35);
  });
});

mocha.run();
