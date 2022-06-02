function isSortedAndHow(array) {
  const ascendingSort = array[1] - array[0] > 0;
  let sorting = true;
  let result = '';

  for (let i = 0; i < array.length - 1; i += 1) {
    const diffirent = array[i + 1] - array[i];
    sorting = ascendingSort ? diffirent >= 0 : diffirent <= 0;
    if (sorting === false) break;
  }

  result += sorting ? 'yes' : 'no';
  if (sorting) result += ascendingSort ? ', ascending' : ', descending';

  return result;
}

console.log(isSortedAndHow([1, 2])); // 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])); // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); // 'no'
