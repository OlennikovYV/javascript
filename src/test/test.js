mocha.setup('bdd');

describe(`Breaking search bad`, function () {
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

  it('example tests', function () {
    const TITLES = [
      'The Big Bang Theory',
      'How I Met Your Mother',
      'Dexter',
      'Breaking Bad',
      'Doctor Who',
      'The Hobbit',
      'Pacific Rim',
      'Pulp Fiction',
      'The Avengers',
      'Shining',
    ];

    result = search('ho');

    equal(result.length, 3, 'on search term "ho"');
    deepEqual(
      result,
      ['How I Met Your Mother', 'Doctor Who', 'The Hobbit'],
      'on search term "ho"'
    );
  });
});

mocha.run();
