mocha.setup('bdd');

describe(`My head is at the wrong end!`, function () {
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

  it('Testing for fixed tests', () => {
    deepEqual(fixTheMeerkat(['tail', 'body', 'head']), [
      'head',
      'body',
      'tail',
    ]);
    deepEqual(fixTheMeerkat(['tails', 'body', 'heads']), [
      'heads',
      'body',
      'tails',
    ]);
    deepEqual(fixTheMeerkat(['bottom', 'middle', 'top']), [
      'top',
      'middle',
      'bottom',
    ]);
    deepEqual(fixTheMeerkat(['lower legs', 'torso', 'upper legs']), [
      'upper legs',
      'torso',
      'lower legs',
    ]);
    deepEqual(fixTheMeerkat(['ground', 'rainbow', 'sky']), [
      'sky',
      'rainbow',
      'ground',
    ]);
  });
});

mocha.run();
