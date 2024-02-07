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

  it('Fun with ES6 Classes #3 - Cuboids, Cubes and Getters', () => {
    const cuboid = new Cuboid(1, 2, 3);
    equal(cuboid.length, 1);
    equal(cuboid.width, 2);
    equal(cuboid.height, 3);
    equal(cuboid.volume, 6);
    equal(cuboid.surfaceArea, 22);
    cuboid.length = 4;
    equal(cuboid.volume, 24);
    equal(cuboid.surfaceArea, 52);
    cuboid.width = 5;
    equal(cuboid.volume, 60);
    equal(cuboid.surfaceArea, 94);
    cuboid.height = 6;
    equal(cuboid.volume, 120);
    equal(cuboid.surfaceArea, 148);
    [cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
    equal(cuboid.volume, 504);
    equal(cuboid.surfaceArea, 382);
  });

  it('should initialize properly and have the same getters as the parent class', () => {
    const cube = new Cube(1);
    equal(cube.length, 1);
    equal(cube.width, 1);
    equal(cube.height, 1);
    equal(cube.volume, 1);
    equal(cube.surfaceArea, 6);
    cube.length = cube.width = cube.height = 2;
    equal(cube.volume, 8);
    equal(cube.surfaceArea, 24);
    cube.length = cube.width = cube.height = 3;
    equal(cube.volume, 27);
    equal(cube.surfaceArea, 54);
    cube.length = cube.width = cube.height = 5;
    equal(cube.volume, 125);
    equal(cube.surfaceArea, 150);
    cube.length = cube.width = cube.height = 10;
    equal(cube.volume, 1000);
    equal(cube.surfaceArea, 600);
  });
});

mocha.run();
