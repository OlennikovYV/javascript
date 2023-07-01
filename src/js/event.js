const Calculator = {
  average: function (...args) {
    if (args.length === 0) return 0;

    return args.reduce((sum, num) => sum + num, 0) / args.length;
  },
};

console.log(Calculator.average(3, 4, 5)); // 4
console.log(Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3));
// 5.769230769230769
console.log(Calculator.average()); // 0
