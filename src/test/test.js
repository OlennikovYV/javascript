mocha.setup('bdd');

describe(`Santa's Naughty List`, function () {
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

  it('Basic test', function () {
    deepEqual(
      findChildren(
        ['Jason', 'Jackson', 'Jordan', 'Johnny'],
        ['Jason', 'Jordan', 'Jennifer']
      ),
      ['Jason', 'Jordan']
    );
  });
  it('Capitalization test', function () {
    deepEqual(
      findChildren(
        ['jASon', 'JAsoN', 'JaSON', 'jasON'],
        ['JasoN', 'jASOn', 'JAsoN', 'jASon', 'JASON']
      ),
      ['JAsoN', 'jASon']
    );
  });
  it('Sorting test', function () {
    deepEqual(
      findChildren(['Jason', 'James', 'Johnson'], ['Jason', 'James', 'JJ']),
      ['James', 'Jason']
    );
  });
});

mocha.run();
