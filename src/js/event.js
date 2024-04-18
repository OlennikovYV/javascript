function redarr(arr) {
  return [...new Set(arr)].sort().reduce((obj, el, index) => {
    obj[index] = el;
    return obj;
  }, {});
}

console.log(redarr(['BBC1', 'BBC2', 'MTV']));
// { 0: 'BBC1', 1: 'BBC2', 2: 'MTV' }
console.log(redarr(['BBC1', 'BBC1', 'BBC2', 'MTV']));
// { 0: 'BBC1', 1: 'BBC2', 2: 'MTV' }
console.log(
  redarr([
    'Channel 5',
    'CNN',
    'Discovery',
    'SkyNews',
    'National Geographic',
    'CNBC',
    'Food Network',
    'CNBC',
    'Discovery',
    'Bloomberg TV',
    'SkyNews',
    'MTV',
    'BBC1',
    'SyFy',
    'BBC1',
    'BBC Sport',
  ])
);
// { '0': 'BBC Sport', '1': 'BBC1', '2': 'Bloomberg TV', '3': 'CNBC',
//   '4': 'CNN', '5': 'Channel 5', '6': 'Discovery', '7': 'Food Network',
//   '8': 'MTV', '9': 'National Geographic', '10': 'SkyNews', '11': 'SyFy' }
