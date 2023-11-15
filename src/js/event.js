function sillycase(silly) {
  const halfString = Math.ceil(silly.length / 2);

  return (
    silly.slice(0, halfString).toLowerCase() +
    silly.slice(halfString).toUpperCase()
  );
}

console.log(sillycase('foobar')); // 'fooBAR'
console.log(sillycase('codewars')); // 'codeWARS'
console.log(sillycase('brian')); // 'briAN'
