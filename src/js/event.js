function calculateTip(amount, rating) {
  const tips = {
    TERRIBLE: 0,
    POOR: 5,
    GOOD: 10,
    GREAT: 15,
    EXCELLENT: 20,
  };

  const tip = tips[rating.toUpperCase()];

  if (tip === undefined) return 'Rating not recognised';

  return Math.ceil(amount * tip * 0.01);
}

console.log(calculateTip(20, 'Excellent')); // 4
console.log(calculateTip(26.95, 'good')); // 3
console.log(calculateTip(23, 'TERRIBLE')); // 0
console.log(calculateTip(26, 'None')); // 'Rating not recognised'
