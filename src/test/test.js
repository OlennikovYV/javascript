mocha.setup('bdd');

describe('Simple Change Machine', function () {
  it('Wrong money', () => {
    let actual = changeMe('Money');
    chai.assert.isDefined(
      actual,
      'Your function did not return a value. Did you log it to console instead?'
    );
    chai.assert.strictEqual(changeMe('Money'), 'Money');
  });

  it('Notes £5', () => {
    actual = changeMe('£5');
    chai.assert.strictEqual(
      actual,
      '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
    );
  });
  it('Notes £2', () => {
    actual = changeMe('£2');
    chai.assert.strictEqual(actual, '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p');
  });
  it('Notes £1', () => {
    actual = changeMe('£1');
    chai.assert.strictEqual(actual, '20p 20p 20p 20p 20p');
  });
  it('Coins 50p', () => {
    actual = changeMe('50p');
    chai.assert.strictEqual(actual, '20p 20p 10p');
  });
  it('Coins 20p', () => {
    actual = changeMe('20p');
    chai.assert.strictEqual(actual, '10p 10p');
  });
});

mocha.run();
