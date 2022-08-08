function excludingVatPrice(price) {
  return price === null ? -1 : Number((price / 1.15).toFixed(2));
}

console.log(excludingVatPrice(230)); // 200.0
console.log(excludingVatPrice(123)); // 106.96
