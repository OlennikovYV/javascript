function mango(quantity, price) {
  const freeProduct = Math.floor(quantity / 3);

  return (quantity - freeProduct) * price;
}

console.log(mango(3, 3)); // 6
console.log(mango(9, 5)); // 30
