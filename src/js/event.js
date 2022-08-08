function excludingVatPrice(price) {
  const round = num => Math.round(num * 100) / 100;

  return price === null ? -1 : round(price / 1.15);
}

console.log(excludingVatPrice(230)); // 200.0
console.log(excludingVatPrice(123)); // 106.96
