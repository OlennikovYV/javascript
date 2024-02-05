mocha.setup('bdd');

describe(`'x' marks the spot.`, function () {
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

  it('Return an empty array if x is an empty array', () => {
    deepEqual(xMarksTheSpot([]), []);
  });
  it('Return an empty array if no x found', () => {
    deepEqual(
      xMarksTheSpot([
        ['o', 'o'],
        ['o', 'o'],
      ]),
      []
    );
  });
  it('Return an empty array if more than one x found', () => {
    deepEqual(
      xMarksTheSpot([
        ['x', 'o'],
        ['o', 'x'],
      ]),
      []
    );
  });
  it('Return [0,0] when x at top left', () => {
    deepEqual(
      xMarksTheSpot([
        ['x', 'o'],
        ['o', 'o'],
      ]),
      [0, 0]
    );
  });
  it('Return [4,6] when x at position [4,6]', () => {
    let input = [
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ];
    deepEqual(xMarksTheSpot(input), [4, 6]);
  });
});

mocha.run();
