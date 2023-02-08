function capMe(names) {
  return names.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase());
}

console.log(capMe(['jo', 'nelson', 'jurie']));
// returns ['Jo', 'Nelson', 'Jurie']
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));
// returns ['Karly', 'Daniel', 'Kelsey']
