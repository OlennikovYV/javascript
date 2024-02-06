mocha.setup('bdd');

describe(`Alphabet war - airstrike - letters massacre`, function () {
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

  it('test', () => {
    equal(alphabetWar('z'), 'Right side wins!');
    equal(alphabetWar('****'), "Let's fight again!");
    equal(alphabetWar('z*dq*mw*pb*s'), "Let's fight again!");
    equal(alphabetWar('zdqmwpbs'), "Let's fight again!");
    equal(alphabetWar('zz*zzs'), 'Right side wins!');
    equal(alphabetWar('sz**z**zs'), 'Left side wins!');
    equal(alphabetWar('z*z*z*zs'), 'Left side wins!');
    equal(alphabetWar('*wwwwww*z*'), 'Left side wins!');
  });
});

mocha.run();
