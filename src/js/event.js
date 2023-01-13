let log;

function doTurn() {
  const step = [
    'rollDice',
    'move',
    'combat',
    'getCoins',
    'buyHealth',
    'printStatus',
  ];

  log = step;
}

doTurn();

console.log(log[0]); // 'rollDice'
console.log(log[1]); // 'move'
console.log(log[2]); // 'combat'
console.log(log[3]); // 'getCoins'
console.log(log[4]); // 'buyHealth'
console.log(log[5]); // 'printStatus'
