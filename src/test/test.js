mocha.setup('bdd');

describe(`Job Matching #1`, function () {
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

  it('test', () => {
    let candidate1 = { minSalary: 120000 },
      job1 = { maxSalary: 130000 },
      job2 = { maxSalary: 80000 };

    equal(match(candidate1, job1), true);
    equal(match(candidate1, job2), false);
  });
});

mocha.run();
