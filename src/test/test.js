mocha.setup('bdd');

describe(`Well of Ideas - Easy Version`, function () {
  const assert = chai.assert.equal;

  it('Testing for fixed tests', () => {
    assert(well(['bad', 'bad', 'bad']), 'Fail!');
    assert(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert(
      well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']),
      'I smell a series!'
    );
  });
});

mocha.run();
