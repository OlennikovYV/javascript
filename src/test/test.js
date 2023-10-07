mocha.setup('bdd');

describe(`Simple Sentences`, function () {
  const equal = chai.assert.equal;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('test', () => {
    equal(makeSentence(['hello', 'world']), 'hello world.');
    equal(makeSentence(['hello', ',', 'my', 'dear']), 'hello, my dear.');
    equal(makeSentence(['hello', 'world', '.']), 'hello world.');
    equal(makeSentence(['hello', 'world', '.', '.', '.']), 'hello world.');
  });
});

mocha.run();
