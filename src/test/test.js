mocha.setup('bdd');

describe(`All unique`, function () {
  const assert = chai.assert.equal;

  it('test', () => {
    assert(geometricSequenceElements(2, 3, 5), '2, 6, 18, 54, 162');
    assert(
      geometricSequenceElements(2, 2, 10),
      '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024'
    );
    assert(
      geometricSequenceElements(1, -2, 10),
      '1, -2, 4, -8, 16, -32, 64, -128, 256, -512'
    );
  });
});

mocha.run();
