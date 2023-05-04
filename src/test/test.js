mocha.setup('bdd');

describe(`Words to sentence`, function () {
  const assert = chai.assert.equal;

  it('Basic tests', function () {
    assert(wordsToSentence(['hello', 'world']), 'hello world');
  });
});

mocha.run();
