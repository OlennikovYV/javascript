mocha.setup('bdd');

describe(`String Reordering`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
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
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('test', () => {
    const List = [
      { 4: 'dog' },
      { 2: 'took' },
      { 3: 'his' },
      { '-2': 'Vatsan' },
      { 5: 'for' },
      { 6: 'a' },
      { 12: 'spin' },
    ];

    equal(sentence(List), 'Vatsan took his dog for a spin');
  });
});

mocha.run();
