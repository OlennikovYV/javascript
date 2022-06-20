function buildString(...template) {
  return `I like ${template.join(', ')}!`;
}

console.log(buildString('Cheese', 'Milk', 'Chocolate')); // 'I like Cheese, Milk, Chocolate!',
console.log(buildString('Cheese', 'Milk')); // 'I like Cheese, Milk!',
console.log(buildString('Chocolate')); // 'I like Chocolate!',
