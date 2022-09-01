function boredom(staff) {
  let assessmentScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };
  let scores = 0;

  for (let key in staff) {
    let keyScore = staff[key];
    scores += assessmentScore[keyScore];
  }

  return scores <= 80
    ? 'kill me now'
    : scores < 100
    ? 'i can handle this'
    : 'party time!!';
}

console.log(
  boredom({
    tim: 'change',
    jim: 'accounts',
    randy: 'canteen',
    sandy: 'change',
    andy: 'change',
    katie: 'IS',
    laura: 'change',
    saajid: 'IS',
    alex: 'trading',
    john: 'accounts',
    mr: 'finance',
  })
); // 'kill me now'
console.log(
  boredom({
    tim: 'IS',
    jim: 'finance',
    randy: 'pissing about',
    sandy: 'cleaning',
    andy: 'cleaning',
    katie: 'cleaning',
    laura: 'pissing about',
    saajid: 'regulation',
    alex: 'regulation',
    john: 'accounts',
    mr: 'canteen',
  })
); // 'i can handle this'
console.log(
  boredom({
    tim: 'accounts',
    jim: 'accounts',
    randy: 'pissing about',
    sandy: 'finance',
    andy: 'change',
    katie: 'IS',
    laura: 'IS',
    saajid: 'canteen',
    alex: 'pissing about',
    john: 'retail',
    mr: 'pissing about',
  })
); // 'party time!!'
