function discoverOriginalPrice(discountedPrice, salePercentage) {
  const roundNumber = num => Math.round(num) / 100;
  return roundNumber((discountedPrice / (100 - salePercentage)) * 10000);
}

console.log(discoverOriginalPrice(75, 25)); // 100
console.log(discoverOriginalPrice(25, 75)); // 100
console.log(discoverOriginalPrice(75.75, 25)); // 101
console.log(discoverOriginalPrice(458.2, 17.13)); // 552.91
