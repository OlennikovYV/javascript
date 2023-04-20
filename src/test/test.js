mocha.setup('bdd');

describe('Complete Series', function () {
  const assert = chai.assert;
  let test1 = [0, 1],
    test2 = [1, 4, 6],
    test3 = [3, 4, 5],
    test4 = [2, 1],
    test5 = [1, 4, 4, 6],
    test6 = [7],
    sol1 = [0, 1],
    sol2 = [0, 1, 2, 3, 4, 5, 6],
    sol3 = [0, 1, 2, 3, 4, 5],
    sol4 = [0, 1, 2],
    sol5 = [0],
    sol6 = [0, 1, 2, 3, 4, 5, 6, 7];

  it('Test 1', function () {
    assert.deepEqual(completeSeries(test1), sol1);
  });

  it('Test 2', function () {
    assert.deepEqual(completeSeries(test2), sol2);
  });

  it('Test 3', function () {
    assert.deepEqual(completeSeries(test3), sol3);
  });

  it('Test 4', function () {
    assert.deepEqual(completeSeries(test4), sol4);
  });

  it('Test 5', function () {
    assert.deepEqual(completeSeries(test5), sol5);
  });

  it('Test 6', function () {
    assert.deepEqual(completeSeries(test6), sol6);
  });
});

mocha.run();
