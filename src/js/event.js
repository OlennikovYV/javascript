function giveChange(amount) {
  const bills = [100, 50, 20, 10, 5, 1];

  return bills
    .map(representMoney => {
      const countRepresent = Math.trunc(amount / representMoney);
      amount -= countRepresent * representMoney;
      return countRepresent;
    })
    .reverse();
}

console.log(giveChange(365)); // [0, 1, 1, 0, 1, 3]
console.log(giveChange(217)); // [2, 1, 1, 0, 0, 2]
console.log(giveChange(8)); // [3, 1, 0, 0, 0, 0]
