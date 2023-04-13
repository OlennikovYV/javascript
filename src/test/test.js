mocha.setup('bdd');

describe('Simple Change Machine', function () {
  it('test', () => {
    let actual = changeMe('£1');

    chai.assert.isDefined(
      actual,
      'Your function did not return a value. Did you log it to console instead?'
    );
    chai.assert.strictEqual(actual, '20p 20p 20p 20p 20p');
    chai.assert.strictEqual(changeMe('Money'), 'Money');
  });
});

mocha.run();
