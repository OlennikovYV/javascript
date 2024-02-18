mocha.setup('bdd');

describe(`Thinkful - List and Loop Drills: Lists of lists`, function () {
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

  it('Basic tests', function () {
    equal(
      processData([
        [2, 5],
        [3, 4],
        [8, 7],
      ]),
      3,
      `For [[2, 5], [3, 4], [8, 7]]`
    );
    equal(
      processData([
        [2, 9],
        [2, 4],
        [7, 5],
      ]),
      28,
      `For [[2, 9], [2, 4], [7, 5]]`
    );
  });
});

mocha.run();
