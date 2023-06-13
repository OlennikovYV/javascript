mocha.setup('bdd');

describe(`!a == a ?!`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('test', () => {
    equal(a == false, true, `a != false`);
    equal(!a == false, true, `!a != false`);
    equal(a == !a, true, `a != !a`);
  });
});

mocha.run();
