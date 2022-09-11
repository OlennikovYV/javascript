mocha.setup('bdd');

describe('Tests', () => {
  it("Testing 'Hello world'", function () {
    chai.expect(validSpacing('Hello world')).to.equal(true);
  });
  it("Testing ' Hello world'", function () {
    chai.expect(validSpacing(' Hello world')).to.equal(false);
  });
  it("Testing 'Hello  world '", function () {
    chai.expect(validSpacing('Hello  world ')).to.equal(false);
  });
  it("Testing 'Hello'", function () {
    chai.expect(validSpacing('Hello')).to.equal(true);
  });
  it("Testing 'Helloworld'", function () {
    chai.expect(validSpacing('Helloworld')).to.equal(true);
  });
});

mocha.run();
