mocha.setup('bdd');

describe(`Thinking & Testing : Incomplete string`, function () {
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

  it('Fixed tests', () => {
    //return s ?
    equal(testit(''), '', '');
    equal(testit('a'), 'a', '');
    equal(testit('b'), 'b', '');
    //return s.substr(0,1) ?
    equal(testit('aa'), 'a', '');
    equal(testit('ab'), 'a', '');
    equal(testit('bc'), 'b', '');
    //return s.substr(0,s.length/2) ?
    equal(testit('aaaa'), 'aa', '');
    equal(testit('aaaaaa'), 'aaa', '');
    //click "Submit" try more testcase...
    equal(testit('lwtflr'), 'qmo', '');
    equal(testit('hheelllloo'), 'hello', '');
    equal(testit('hheellllo'), 'hello', '');
  });
});

mocha.run();
