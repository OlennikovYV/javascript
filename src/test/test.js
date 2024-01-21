mocha.setup('bdd');

describe(`first character that repeats`, function () {
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

  it('test', () => {
    equal(firstDup('tweet'), 't');
    equal(firstDup('Ode to Joy'), ' ');
    equal(firstDup('ode to joy'), 'o');
    equal(firstDup('bar'), undefined);
    equal(firstDup('123123'), '1');
    equal(firstDup('!@#$!@#$'), '!');
  });
});

mocha.run();
