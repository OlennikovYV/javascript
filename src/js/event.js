function giveMeFive(obj) {
  let result = [];

  for (let key in obj) {
    if (key.length === 5) result.push(key);
    if (obj[key].length === 5) result.push(obj[key]);
  }

  return result;
}

console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));
// ['earth', 'world']
console.log(
  giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' })
);
// ['Ihave', 'money', 'model']
console.log(giveMeFive({ Pears: 'than', apple: 'sweet' }));
// ['Pears', 'apple', 'sweet']
