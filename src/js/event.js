Array.prototype.filter = function (func) {
  let filterArray = [];

  if (!func) return filterArray;

  for (let i = 0; i < this.length; i += 1)
    if (func(this[i]) === true) filterArray.push(this[i]);

  return filterArray;
};

console.log(
  [1, 2, 3, 4].filter(num => {
    return num > 3;
  })
); // [4]
