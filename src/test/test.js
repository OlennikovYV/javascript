mocha.setup('bdd');

describe('Monotone travel', function () {
  const range = function (a, b) {
    const r = [],
      step = b - a > 0 ? 1 : -1;
    do {
      r.push(a);
    } while (step * (b - (a += step)) >= 0);
    return r;
  };
  it('should work on increasing lists', function () {
    chai.expect(isMonotone(range(1, 10)));
    chai.expect(isMonotone(range(4, 12)));
  });
  it('should work on constant lists', function () {
    chai.expect(isMonotone([5, 5, 5, 5, 5]));
  });
  it('should work on empty an empty list', function () {
    chai.expect(isMonotone([]));
  });
  it('should return false on a decreasing list', function () {
    chai.expect(!isMonotone(range(5, 1)));
  });
  it('should work on a non-decreasing list', function () {
    chai.expect(isMonotone([1, 2, 3, 3, 4, 5]));
  });
});

mocha.run();
