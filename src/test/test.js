mocha.setup('bdd');

describe('Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()', () => {
  it('test', () => {
    chai.expect(howManySmaller([1.234, 1.235, 1.228], 1.24)).to.equal(2);
    chai.expect(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)).to.equal(1);
    chai.expect(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)).to.equal(2);
  });
});

mocha.run();
