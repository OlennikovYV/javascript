function mango(quantity, price) {
  const Residue = quantity % 3;
  const paid = quantity - Residue;
  const costPaid = (paid / 3) * 2;

  return costPaid * price + Residue * price;
}

console.log(mango(3, 3)); // 6
console.log(mango(9, 5)); // 30
