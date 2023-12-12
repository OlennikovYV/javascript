mocha.setup('bdd');

describe(`A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"`, function () {
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

  const listCareer = [
    `FrontEnd Developer`,
    `BackEnd Developer`,
    `Full-Stack Developer`,
  ];

  for (let i = 0; i < 9; i++) {
    it(`Test ${i + 1}`, function () {
      oneOf(yourFutureCareer(), listCareer, 'Not found in list');
    });
  }
});

mocha.run();
