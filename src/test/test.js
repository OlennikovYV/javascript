mocha.setup('bdd');

describe('Training JS #1: create your first JS function and print "Hello World!"', () => {
  it('test', () => {
    chai.expect(helloWorld);
  });
});

mocha.run();
