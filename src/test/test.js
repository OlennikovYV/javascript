mocha.setup('bdd');

describe(`Difference between years. (Level 1)`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('Tests', () => {
    equal(howManyYears('1997/10/10', '2015/10/10'), 18);
    equal(howManyYears('1990/10/10', '2015/10/10'), 25);
    equal(howManyYears('2015/10/10', '1990/10/10'), 25);
    equal(howManyYears('1992/10/24', '2015/10/24'), 23);
    equal(howManyYears('2018/10/10', '2000/10/10'), 18);
  });
});

mocha.run();
