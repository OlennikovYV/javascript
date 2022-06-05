function calculateTip(amount, rating) {
  const tips = {
    TERRIBLE: 0,
    POOR: 0.05,
    GOOD: 0.1,
    GREAT: 0.15,
    EXCELLENT: 0.2,
  };

  rating = rating.toUpperCase();

  return rating in tips
    ? Math.ceil(amount * tips[rating])
    : 'Rating not recognised';
}

console.log(calculateTip(20, 'Excellent')); // 4
console.log(calculateTip(26.95, 'good')); // 3
console.log(calculateTip(23, 'TERRIBLE')); // 0
console.log(calculateTip(26, 'None')); // 'Rating not recognised'
