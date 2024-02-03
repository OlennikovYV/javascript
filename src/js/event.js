function type(value) {
  if (Array.isArray(value)) return 'array';
  if (value instanceof Date) return 'date';
  if (value === null) return 'null';

  return typeof value;
}

console.log(type([])); // 'array'
console.log(type({})); // 'object'
console.log(type('')); // 'string'
console.log(type([].join())); // 'string'
console.log(type(new Date())); // 'date'
console.log(type(() => {})); // 'function'
console.log(type(NaN)); // 'number'
console.log(type(true)); // 'boolean'
console.log(type(null)); // 'null'
console.log(type(undefined)); // 'undefined'
