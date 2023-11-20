mocha.setup('bdd');

describe(`draw me a chessboard`, function () {
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

  it('should have correct number of rows and columns', function () {
    deepEqual(chessBoard(6, 4), [
      ['O', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'O'],
      ['O', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'O'],
      ['O', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'O'],
    ]);
  });

  it("O's and X's should alternate correctly", function () {
    deepEqual(chessBoard(3, 7), [
      ['O', 'X', 'O', 'X', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'X', 'O', 'X', 'O'],
    ]);
  });
});

mocha.run();
