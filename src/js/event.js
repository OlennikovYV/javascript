Array.prototype.remove = function (pred) {
  const result = this.filter(el => pred(el));
  const deleteList = this.filter(el => !pred(el));

  this.splice(0, this.length);
  deleteList.forEach(el => this.push(el));

  return result;
};

let array = [1, 2, 3, 4, 5];
let predicate = i => i % 2 === 0;
let removed = array.remove(predicate);

console.log(removed); // [2, 4]
console.log(array, [1, 3, 5]);

array = [1, 2, 3, 4, 5];
predicate = i => i % 2 !== 0;
removed = array.remove(predicate);

console.log(removed); // [1, 3, 5]
console.log(array, [2, 4]);

array = [2, 2, 2, 2, 2];
predicate = i => i === 2;
removed = array.remove(predicate);

console.log(removed); // [2, 2, 2, 2, 2]
console.log(array, []);

array = ['a', 'b', 'c', 'd', 'e'];
predicate = i => i >= 'a' && i <= 'd';
removed = array.remove(predicate);

console.log(removed); // ['a', 'b', 'c', 'd']
console.log(array, ['e']);
