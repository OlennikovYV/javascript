mocha.setup('bdd');

describe('Case Swapping', () => {
  describe('Basic tests', () => {
    it(`Testing for "HelloWorld"`, () =>
      chai.expect(swap('HelloWorld')).to.equal('hELLOwORLD'));
    it(`Testing for "CodeWars"`, () =>
      chai.expect(swap('CodeWars')).to.equal('cODEwARS'));
    it(`Testing for "a B1"`, () => chai.expect(swap('a B1')).to.equal('A b1'));
  });
});

mocha.run();
