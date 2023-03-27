function trim(str, size) {
  if (str.length <= size) return str;
  if (size <= 3) return str.slice(0, size) + '...';
  return str.slice(0, size - 3) + '...';
}

console.log(trim('Creating kata is fun', 14));
// 'Creating ka...');
console.log(trim('He', 1));
// 'H...');
console.log(trim('Code Wars is pretty rad', 50));
// 'Code Wars is pretty rad');
console.log(trim('aWtI prI kp', 2));
// 'aW...');
console.log(trim('Hey', 3));
// 'Hey');
console.log(trim('Code Wars is pretty rad', 3));
// 'Cod...');
