function discoverOriginalPrice(discountedPrice, salePercentage) {
  const percent = 1 - salePercentage / 100;
  const originalPrice = discountedPrice / percent;

  return Number(originalPrice.toFixed(2));
}

console.log(discoverOriginalPrice(75, 25)); // 100
console.log(discoverOriginalPrice(25, 75)); // 100
console.log(discoverOriginalPrice(75.75, 25)); // 101
console.log(discoverOriginalPrice(458.2, 17.13)); // 552.91
