function checkTheBucket(bucket) {
  return bucket.includes('gold');
}

console.log(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone'])); // false
console.log(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold'])); // true
console.log(checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone'])); // true
console.log(checkTheBucket([])); // false
console.log(checkTheBucket(['stone', 'stone', 'stone', 'gold', 'gold'])); // true
