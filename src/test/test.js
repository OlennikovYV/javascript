mocha.setup('bdd');

describe('Swap Values', () => {
  it('test', () => {
    var arr = [1, 2];

    swapValues(arr);

    chai.expect(arr[0]).to.equal(2);
    chai.expect(arr[1]).to.equal(1);
  });
});

mocha.run();
