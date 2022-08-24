function discoverOriginalPrice(discountedPrice, salePercentage) {
  return Number((discountedPrice / (1 - salePercentage / 100)).toFixed(2));
}

console.log(discoverOriginalPrice(75, 25)); // 100
console.log(discoverOriginalPrice(25, 75)); // 100
console.log(discoverOriginalPrice(75.75, 25)); // 101
console.log(discoverOriginalPrice(458.2, 17.13)); // 552.91
