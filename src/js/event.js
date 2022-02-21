function rentalCarCost(d) {
    let dayCost = 40;
    if (d >= 7) return d * dayCost - 50;
    if (d >= 3) return d * dayCost - 20;
    return d * dayCost;
}

console.log(rentalCarCost(3)); //100
console.log(rentalCarCost(4)); //140
console.log(rentalCarCost(5)); //180
console.log(rentalCarCost(6)); //220