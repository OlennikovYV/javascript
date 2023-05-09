mocha.setup('bdd');

describe(`Arrh, grabscrab!`, function () {
  const assert = chai.assert.deepEqual;

  it('should pass sample test cases', function () {
    assert(
      grabscrab('trisf', ['first']),
      ['first'],
      "Should have found 'first'"
    );
    assert(
      grabscrab('oob', ['bob', 'baobab']),
      [],
      'Should not have found anything'
    );
    assert(
      grabscrab('ainstuomn', ['mountains', 'hills', 'mesa']),
      ['mountains'],
      "Should have found 'mountains'"
    );
    assert(
      grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop']),
      ['pool', 'loop'],
      "Should have found 'pool' and 'loop'"
    );
    assert(
      grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey']),
      ['sport', 'ports'],
      "Should have found 'sport' and 'ports'"
    );
    assert(
      grabscrab('ourf', ['one', 'two', 'three']),
      [],
      'Should not have found anything'
    );
  });
});

mocha.run();
