function binRota(arr) {
  return arr.reduce(
    (rota, row, index) =>
      index % 2 === 0 ? rota.concat(row) : rota.concat(row.reverse()),
    []
  );
}

console.log(
  binRota([
    ['Bob', 'Nora'],
    ['Ruby', 'Carl'],
  ])
); // ['Bob', 'Nora', 'Carl', 'Ruby']
console.log(binRota([['Billy']])); // ['Billy']
console.log(binRota([['Billy', 'Nancy']])); // ['Billy', 'Nancy']
console.log(binRota([['Billy'], ['Megan'], ['Aki'], ['Arun'], ['Joy']]));
// ['Billy', 'Megan', 'Aki', 'Arun', 'Joy']
console.log(
  binRota([
    ['Sam', 'Nina', 'Tim', 'Helen', 'Gurpreet', 'Edward', 'Holly', 'Eliza'],
    ['Billy', 'Megan', 'Aki', 'Arun', 'Joy', 'Anish', 'Lee', 'Maryan'],
    ['Nick', 'Josh', 'Pete', 'Kavita', 'Daisy', 'Francesca', 'Alfie', 'Macy'],
  ])
);
// ['Sam', 'Nina', 'Tim', 'Helen', 'Gurpreet', 'Edward',
// 'Holly', 'Eliza', 'Maryan', 'Lee', 'Anish', 'Joy',
// 'Arun', 'Aki', 'Megan', 'Billy', 'Nick', 'Josh',
// 'Pete', 'Kavita', 'Daisy', 'Francesca', 'Alfie', 'Macy']
console.log(
  binRota([
    ['Stefan', 'Raj', 'Marie'],
    ['Alexa', 'Amy', 'Edward'],
    ['Liz', 'Claire', 'Juan'],
    ['Dee', 'Luke', 'Elle'],
  ])
);
// ['Stefan', 'Raj', 'Marie', 'Edward', 'Amy', 'Alexa',
// 'Liz', 'Claire', 'Juan', 'Elle', 'Luke', 'Dee']
