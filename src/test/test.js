mocha.setup('bdd');

describe(`Make acronym`, function () {
  const assert = chai.assert.equal;

  it('Sample Tests', () => {
    let tests = [
      ['Code Wars', 'CW'],
      ['Water Closet', 'WC'],
      ['Portable Network Graphics', 'PNG'],
      ['PHP: Hypertext Preprocessor', 'PHP'],
      ['hyper text markup language', 'HTML'],
    ];
    tests.forEach(([inp, exp]) => assert(toAcronym(inp), exp));
  });
});

mocha.run();
