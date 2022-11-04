function capital(capitals) {
  return capitals.map(
    el => `The capital of ${el.country || el.state} is ${el.capital}`
  );
}

const state_capitals = [{ state: 'Maine', capital: 'Augusta' }];

console.log(capital(state_capitals)[0]);
// 'The capital of Maine is Augusta'

const country_capitals = [{ country: 'Spain', capital: 'Madrid' }];
console.log(capital(country_capitals)[0]);
// 'The capital of Spain is Madrid'

const mixed_capitals = [
  { state: 'Maine', capital: 'Augusta' },
  { country: 'Spain', capital: 'Madrid' },
];
console.log(capital(mixed_capitals)[1]);
// 'The capital of Spain is Madrid'
