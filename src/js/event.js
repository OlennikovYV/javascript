function fuelPrice(litres, pricePerLitre) {
  const discount = Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  const price = litres * (pricePerLitre - discount);

  return Math.round(price * 100) / 100;
}

console.log(fuelPrice(5, 1.23)); // 5.65
console.log(fuelPrice(8, 2.5)); // 18.4
console.log(fuelPrice(5, 5.6)); // 27.5
console.log(fuelPrice(158, 18.67)); // 2910.36
