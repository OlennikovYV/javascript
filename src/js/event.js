function ghostBusters(building) {
  return / /.test(building)
    ? building.replace(/ /g, '')
    : "You just wanted my autograph didn't you?";
}

console.log(ghostBusters('Factor y'));
// 'Factory',
console.log(ghostBusters('O  f fi ce'));
// 'Office',
console.log(ghostBusters('BusStation'));
// "You just wanted my autograph didn't you?",
