function addArrays(array1, array2) {
  if (array1.length !== array2.length) throw new Error('Error');

  return array1.map((el, index) => el + array2[index]);
}

console.log(addArrays([1, 2], [4, 5])); // [5, 7]
console.log(addArrays(['a'], ['b'])); // ['ab']

try {
  addArrays([1, 2, 3], [4, 5]);
} catch (error) {
  console.log(error.message); // Error
}
