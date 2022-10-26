mocha.setup('bdd');

describe('Add new item (collections are passed by reference)', () => {
  it('test', () => {
    chai.expect(addExtra([1, 2, 3]).length).to.equal(4);
    chai.expect(addExtra([1, 2]).length).to.equal(3);
    chai.expect(addExtra([]).length).to.equal(1);

    var arr = [1, 2, 3];
    chai.expect(addExtra(arr)).to.not.equal(arr);
  });
});

mocha.run();
