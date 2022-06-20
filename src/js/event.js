function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

console.log(formatMoney(39.99)); // '$39.99'
