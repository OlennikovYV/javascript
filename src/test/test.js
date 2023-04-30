mocha.setup('bdd');

describe(`Find the Difference in Age between Oldest and Youngest Family Members`, function () {
  const assert = chai.assert.deepEqual;

  it('test', () => {
    assert(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
    assert(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
  });
});

mocha.run();
