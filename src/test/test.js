mocha.setup('bdd');

describe(`Tic-Tac-Toe Checker`, function () {
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

  it('Not finished - returned -1', () => {
    isTrue(
      isSolved([
        [0, 0, 1],
        [0, 1, 2],
        [2, 1, 0],
      ]) === -1
    );
  });

  it('Draw - returned 0', () => {
    isTrue(
      isSolved([
        [1, 2, 1],
        [2, 2, 1],
        [1, 1, 2],
      ]) === 0
    );
  });

  it('Winner 1 player - returned 1', () => {
    isTrue(
      isSolved([
        [0, 0, 1],
        [0, 1, 2],
        [1, 2, 0],
      ]) === 1
    );
  });

  it('Winner 2 player - returned 2', () => {
    isTrue(
      isSolved([
        [0, 2, 1],
        [0, 2, 1],
        [1, 2, 0],
      ]) === 2
    );
  });
});

mocha.run();
