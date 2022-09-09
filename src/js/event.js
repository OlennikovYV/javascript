Array.prototype.numberOfOccurrences = function (num) {
  return this.reduce((sum, number) => {
    if (number === num) sum += 1;

    return sum;
  }, 0);
};

const arr = [4, 0, 4];
console.log(arr.numberOfOccurrences(4)); // 2
