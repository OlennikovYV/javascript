mocha.setup('bdd');

describe(`Function Composition`, function () {
  const assert = chai.assert.equal;

  it('Should work with a single argument', () => {
    const add1 = function (a) {
      return a + 1;
    };
    const id = function (a) {
      return a;
    };

    assert(compose(add1, id)(0), 1);
  });
  it('Should work with a single argument', () => {
    const add1 = function (a) {
      return a + 1;
    };
    const addAll3 = function (a, b, c) {
      return a + b + c;
    };

    assert(compose(add1, addAll3)(1, 2, 3), 7);
  });
});

mocha.run();
