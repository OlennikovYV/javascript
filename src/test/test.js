mocha.setup('bdd');

describe('Flatten', () => {
  it('test', () => {
    chai.expect(flatten([])).to.eql([]);
    chai.expect(flatten([1, 2, 3])).to.eql([1, 2, 3]);
    chai
      .expect(
        flatten([
          [1, 2, 3],
          ['a', 'b', 'c'],
          [1, 2, 3],
        ])
      )
      .to.eql([1, 2, 3, 'a', 'b', 'c', 1, 2, 3]);
    chai
      .expect(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']]))
      .to.eql([3, 4, 5, [9, 9, 9], 'a,b,c']);
    chai
      .expect(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]))
      .to.eql([[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
  });
});

mocha.run();
