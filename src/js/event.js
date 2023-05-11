function ghostBusters(building) {
  const arrBuilding = building.split` `;

  return arrBuilding.length === 1
    ? "You just wanted my autograph didn't you?"
    : arrBuilding.join``;
}

console.log(ghostBusters('Factor y'));
// 'Factory',
console.log(ghostBusters('O  f fi ce'));
// 'Office',
console.log(ghostBusters('BusStation'));
// "You just wanted my autograph didn't you?",
