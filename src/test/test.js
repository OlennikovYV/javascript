mocha.setup('bdd');

describe(`Semi-Optional`, function () {
  const assert = chai.assert.equal;

  it('should pass sample test cases', function () {
    const res = wrap('MyTest');
    assert(typeof res, 'object', "Doesn't return an object");
    assert(res.value, 'MyTest');
    assert(wrap(343).value, 343);
    var obj = { test: 'testy' };
    assert(wrap(obj).value, obj);
  });
});

mocha.run();
