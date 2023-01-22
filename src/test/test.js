mocha.setup('bdd');

describe('Convert an array of strings to array of numbers', function () {
  it('Running toNumberArray("1.1","2.2","3.3")...', function () {
    chai.expect(toNumberArray(['1.1', '2.2', '3.3'])).to.eql([1.1, 2.2, 3.3]);
  });
});

mocha.run();
