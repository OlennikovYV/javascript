mocha.setup('bdd');

describe(`Test's results`, function () {
  const assert = chai.assert;

  it('test', () => {
    assert.deepEqual(spacey(['kevin', 'has', 'no', 'space']), [
      'kevin',
      'kevinhas',
      'kevinhasno',
      'kevinhasnospace',
    ]);
    assert.deepEqual(spacey(['this', 'cheese', 'has', 'no', 'holes']), [
      'this',
      'thischeese',
      'thischeesehas',
      'thischeesehasno',
      'thischeesehasnoholes',
    ]);
  });
});

mocha.run();
