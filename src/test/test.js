mocha.setup('bdd');

describe(`String chunks`, function () {
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
    deepEqual(stringChunk('codewars', 2), ['co', 'de', 'wa', 'rs']);
    deepEqual(stringChunk('thiskataeasy', 4), ['this', 'kata', 'easy']);
    deepEqual(stringChunk('hello world', 3), ['hel', 'lo ', 'wor', 'ld']);
    deepEqual(stringChunk('sunny day', 0), []);
  });
});

mocha.run();
