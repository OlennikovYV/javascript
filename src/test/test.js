mocha.setup('bdd');

describe(`Fix the Bugs (Syntax) - My First Kata`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('test', () => {
    equal(myFirstKata(3, 5), (3 % 5) + (5 % 3));
    equal(myFirstKata('hello', 3), false);
    equal(myFirstKata(67, 'bye'), false);
    equal(myFirstKata(true, true), false);
    equal(myFirstKata(314, 107), (107 % 314) + (314 % 107));
    equal(myFirstKata(19483, 9), (9 % 19483) + (19483 % 9));
  });
});

mocha.run();
