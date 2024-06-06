mocha.setup('bdd');

const nameTask = `Geometry Basics: Triangle Perimeter in 2D`;

describe(nameTask, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const noError = chai.assert.doesNotThrow;
  const include = chai.assert.include;
  /* Утверждает, что подмножество включено в надмножество в том же порядке,
    начиная с первого элемента в надмножестве. Использует глубокую проверку
    равенства.
    Например: [{b:1},{a:2}] === [{b:1},{a:2}] */
  const includeDeepOrderedMembers = chai.assert.includeDeepOrderedMembers;

  it('test', () => {
    equal(
      +trianglePerimeter(
        new Triangle(new Point(10, 10), new Point(40, 10), new Point(10, 50))
      ).toFixed(6),
      120
    );
    equal(
      +trianglePerimeter(
        new Triangle(new Point(15, -10), new Point(40, 20), new Point(20, 50))
      ).toFixed(6),
      135.314734
    );
  });
});

mocha.run();
