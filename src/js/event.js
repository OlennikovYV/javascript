const findMissing = function (list) {
  const step = (list[list.length - 1] - list[0]) / list.length;

  return (
    list.filter(function (val, index) {
      return val !== list[0] + index * step;
    })[0] - step
  );
};

console.log(findMissing([0, -2, -3])); // -1
console.log(findMissing([-7, -9, -10])); // -8
console.log(findMissing([1, 3, 4])); // 2
