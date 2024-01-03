mocha.setup('bdd');

describe(`How sexy is your name?`, function () {
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

  it('Not too sexy!', () => {
    equal(sexyName('GUV'), 'NOT TOO SEXY');
    equal(sexyName('PHUG'), 'NOT TOO SEXY');
    equal(sexyName('FFFFF'), 'NOT TOO SEXY');
    equal(sexyName(''), 'NOT TOO SEXY');
    equal(sexyName('PHUG'), 'NOT TOO SEXY');
  });
  it('Pretty sexy!', () => {
    equal(sexyName('BOB'), 'PRETTY SEXY');
    equal(sexyName('JLJ'), 'PRETTY SEXY');
    equal(sexyName('HHHHHU'), 'PRETTY SEXY');
    equal(sexyName('BOB'), 'PRETTY SEXY');
    equal(sexyName('WWWWWU'), 'PRETTY SEXY');
  });
  it('Very sexy!', () => {
    equal(sexyName('YOU'), 'VERY SEXY');
    equal(sexyName('FABIO'), 'VERY SEXY');
    equal(sexyName('ARUUUUUUUUU'), 'VERY SEXY');
  });
  it('The utlimate sexiest!', () => {
    equal(sexyName('ROBBY'), 'THE ULTIMATE SEXIEST');
    equal(sexyName('SAMANTHA'), 'THE ULTIMATE SEXIEST');
    equal(sexyName('DONALD TRUMP'), 'THE ULTIMATE SEXIEST');
    equal(sexyName('BILL GATES'), 'THE ULTIMATE SEXIEST');
    equal(sexyName('SCARLETT JOHANSSON'), 'THE ULTIMATE SEXIEST');
    equal(sexyName('CODEWARS'), 'THE ULTIMATE SEXIEST');
    equal(sexyName('PAMELA ANDERSON'), 'THE ULTIMATE SEXIEST');
  });
  it('Different case', () => {
    equal(sexyName('Lxu'), 'PRETTY SEXY');
  });
});

mocha.run();
