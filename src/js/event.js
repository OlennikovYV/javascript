function fuelPrice(litres, pricePerLitre) {
  let discount = 0;

  if (2 <= litres && litres < 4) discount = 5;
  if (4 <= litres && litres < 6) discount = 10;
  if (6 <= litres && litres < 8) discount = 15;
  if (8 <= litres && litres < 10) discount = 20;
  if (litres >= 10) discount = 25;

  return Math.round(litres * (pricePerLitre * 100 - discount)) / 100;
}

console.log(fuelPrice(5, 1.23)); // 5.65
console.log(fuelPrice(8, 2.5)); // 18.4
console.log(fuelPrice(5, 5.6)); // 27.5
console.log(fuelPrice(158, 18.67)); // 2910.36
