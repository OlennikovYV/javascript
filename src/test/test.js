mocha.setup('bdd');

describe(`Do you speak retsec?`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('test', () => {
    equal(reverseByCenter('secret'), 'retsec');
    equal(reverseByCenter('agent'), 'nteag');
    equal(reverseByCenter('raw'), 'war');
    equal(reverseByCenter('onion'), 'onion');
  });
});

mocha.run();
