mocha.setup('bdd');

describe(`First-Class Function Factory`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('test', () => {
    var myArray = [1, 2, 3];

    var threes = factory(3);
    deepEqual(threes(myArray), [3, 6, 9]);

    var fives = factory(5);
    deepEqual(fives(myArray), [5, 10, 15]);
  });
});

mocha.run();
