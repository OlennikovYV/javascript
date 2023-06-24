mocha.setup('bdd');

describe(`Incorrect division method`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;

  it('test', () => {
    equal(
      matchArrays(['Perl', 'Closure', 'JavaScript'], ['Go', 'C++', 'Erlang']),
      0
    );
    equal(
      matchArrays(
        ['incapsulation', 'OOP', 'array'],
        ['time', 'propert', 'paralelism', 'OOP']
      ),
      1
    );
    equal(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]), 4);
  });
});

mocha.run();
