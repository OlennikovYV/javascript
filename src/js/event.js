function findChildren(santasList, children) {
  const santaChildrenList = [];

  santasList.filter(nameChildren => {
    if (
      children.includes(nameChildren) &&
      !santaChildrenList.includes(nameChildren)
    ) {
      santaChildrenList.push(nameChildren);
      return true;
    } else {
      return false;
    }
  });

  return santaChildrenList.sort();
}

console.log(
  findChildren(
    ['Jason', 'Jackson', 'Jordan', 'Johnny'],
    ['Jason', 'Jordan', 'Jennifer']
  )
);
// ["Jason", "Jordan"]);
console.log(
  findChildren(
    ['jASon', 'JAsoN', 'JaSON', 'jasON'],
    ['JasoN', 'jASOn', 'JAsoN', 'jASon', 'JASON']
  )
);
// ["JAsoN", "jASon"]);
console.log(
  findChildren(['Jason', 'James', 'Johnson'], ['Jason', 'James', 'JJ'])
);
// ["James", "Jason"]);
