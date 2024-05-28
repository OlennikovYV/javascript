const looseChange = cents => (
  (cents = Math.max(cents, 0)),
  {
    Quarters: (cents / 25) | 0,
    Dimes: ((cents % 25) / 10) | 0,
    Nickels: (((cents % 25) % 10) / 5) | 0,
    Pennies: cents % 5 | 0,
  }
);

console.log(looseChange(56)); // { Nickels: 1, Pennies: 1, Dimes: 0, Quarters: 2 }
console.log(looseChange(100)); // { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 4 }
console.log(looseChange(0)); // { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }
console.log(looseChange(-3)); // { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 },
console.log(looseChange(7.9)); // { Nickels: 1, Pennies: 2, Dimes: 0, Quarters: 0 }
