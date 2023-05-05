mocha.setup('bdd');

describe(`Every archer has its arrows`, function () {
  const assert = chai.assert.equal;

  it('test', () => {
    assert(archersReady([]), false, 'Should handle no archers');
    assert(
      archersReady([1, 2, 3, 4]),
      false,
      'Should handle unprepared archers'
    );
    assert(archersReady([5, 6, 7, 8]), true, 'Should handle prepared archers');
    assert(
      archersReady([1, 2, 3, 4, 5, 6, 7, 8]),
      false,
      'Should handle mixed archers'
    );
  });
});

mocha.run();
