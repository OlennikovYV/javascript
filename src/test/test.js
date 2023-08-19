mocha.setup('bdd');

describe(`Milk and Cookies for Santa`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('test', () => {
    let year = 2013;
    let month = 11;
    let day = 24;
    equal(timeForMilkAndCookies(new Date(year, month, day)), true);

    year = 2013;
    month = 10;
    day = 24;
    equal(timeForMilkAndCookies(new Date(year, month, day)), false);
  });
});

mocha.run();
