reverse = function (array) {
  return array.reduce((acc, el) => {
    return [el].concat(acc);
  }, []);
};

console.log(reverse([1, 2, 3])); // [3, 2, 1]
console.log(reverse([1, null, 14, 'two'])); // ['two', 14, null, 1]
