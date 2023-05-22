mocha.setup('bdd');

describe(`The First Non Repeated Character In A String`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('Testing for test', () => equal(firstNonRepeated('test'), 'e'));
  it('Testing for teeter', () => equal(firstNonRepeated('teeter'), 'r'));
  it('Testing for 1122321235121222', () =>
    equal(firstNonRepeated('1122321235121222'), '5'));
  it('Testing for rend', () => equal(firstNonRepeated('rend'), 'r'));
  it('Testing for aabbcc', () => isNull(firstNonRepeated('aabbcc'), null));
});

mocha.run();
