function type(value) {
  return {}.toString.call(value).slice(8, -1).toLowerCase();
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
