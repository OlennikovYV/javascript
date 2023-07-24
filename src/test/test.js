mocha.setup('bdd');

describe(`Is the date today`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  const today = new Date();
  it('should return <code>true</code> for today', () => {
    let actualToday = isToday(today);
    assertNotPrinting(actualToday);
    equal(actualToday, true);
  });

  it('should return false for tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    equal(isToday(tomorrow), false);
  });

  it('should return false for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    equal(isToday(yesterday), false);
  });

  function assertNotPrinting(actual) {
    isDefined(
      actual,
      'You should return true or false. Did you print the answer instead?\n'
    );
  }
});

mocha.run();
