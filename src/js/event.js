function inArray(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.some(word => word.indexOf(array1[i]) !== -1)) {
      result.push(array1[i]);
    }
  }

  return result.sort();
}

a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

a1 = ['xyz', 'live', 'strong'];
console.log(inArray(a1, a2)); // ['live', 'strong']

a1 = ['live', 'strong', 'arp'];
console.log(inArray(a1, a2)); // ['arp', 'live', 'strong']

a1 = ['tarp', 'mice', 'bull'];
console.log(inArray(a1, a2)); // []
