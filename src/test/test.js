mocha.setup('bdd');

describe('Playing with cubes II', () => {
  it('test', () => {
    let cube = new Cube(12);
    chai.expect(cube.getSide()).to.equal(12);
    cube.setSide(42);
    chai.expect(cube.getSide()).to.equal(42);
  });
});

mocha.run();
