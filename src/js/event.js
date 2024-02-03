function type(value) {
  if (Array.isArray(value)) return 'array';
  if (typeof value === 'function') return 'function';
  if (value instanceof Date) return 'date';
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'object') return 'object';
  if (typeof value === 'string') return 'string';
  if (typeof value === 'number') return 'number';
  if (typeof value === 'boolean') return 'boolean';
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
