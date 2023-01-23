mocha.setup('bdd');

describe('Merge two arrays', function () {
  it('Passes if arrays are equals', function () {
    chai
      .expect(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']))
      .to.eql([1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e', 6, 7, 8]);
    chai
      .expect(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]))
      .to.eql(['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
    chai
      .expect(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']))
      .to.eql([2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
    chai
      .expect(
        mergeArrays(
          ['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'],
          [2, 5, 8, 23, 67, 6]
        )
      )
      .to.eql([
        'b',
        2,
        'r',
        5,
        'a',
        8,
        'u',
        23,
        'r',
        67,
        's',
        6,
        'e',
        'q',
        'z',
      ]);
  });
});

mocha.run();
