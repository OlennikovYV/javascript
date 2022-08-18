function toTime(seconds) {
  return `${(seconds / 3600) ^ 0} hour(s) and ${
    ((seconds % 3600) / 60) ^ 0
  } minute(s)`;
}

console.log(toTime(3600)); // '1 hour(s) and 0 minute(s)'
console.log(toTime(3601)); // '1 hour(s) and 0 minute(s)'
console.log(toTime(3500)); // '0 hour(s) and 58 minute(s)'
console.log(toTime(323500)); // '89 hour(s) and 51 minute(s)'
console.log(toTime(0)); // '0 hour(s) and 0 minute(s)'
