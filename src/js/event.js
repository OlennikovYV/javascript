function giveMeFive(obj) {
  return Object.entries(obj)
    .flat(1)
    .filter(value => value.length === 5);
}

console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));
// ['earth', 'world']
console.log(
  giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' })
);
// ['Ihave', 'money', 'model']
console.log(giveMeFive({ Pears: 'than', apple: 'sweet' }));
// ['Pears', 'apple', 'sweet']
