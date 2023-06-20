mocha.setup('bdd');

describe(`Homogenous arrays`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;

  it('test', () => {
    deepEqual(
      filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]),
      [[1, 5, 4], ['b']]
    );
    deepEqual(
      filterHomogenous([
        [123, 234, 432],
        ['', 'abc'],
        [''],
        ['', 1],
        ['', '1'],
        [],
      ]),
      [[123, 234, 432], ['', 'abc'], [''], ['', '1']]
    );
  });
});

mocha.run();
