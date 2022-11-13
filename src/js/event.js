function timeCorrect(timestring) {
  if (!timestring) return timestring;

  if (/\d\d\:\d\d\:\d\d/.test(timestring)) {
    let [hours, minutes, seconds] = timestring.split(':');

    // debugger;

    let seconsRemainder = Math.trunc(seconds / 60);
    let minutesRemainder = Math.trunc(minutes / 60);

    seconds = seconds % 60;
    minutes = (minutes % 60) + seconsRemainder;
    hours = (hours % 24) + minutesRemainder;

    if (minutes >= 60) {
      minutes %= 60;
      hours += 1;
    }

    if (hours >= 24) {
      hours %= 24;
    }

    seconds = String(seconds).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    hours = String(hours).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }

  return null;
}

// Null or Empty
console.log(timeCorrect(null)); // null
console.log(timeCorrect('')); // ''

// Invalid Format
console.log(timeCorrect('001122')); // null
console.log(timeCorrect('00;11;22')); // null
console.log(timeCorrect('0a:1c:22')); // null

// Correction Tests
console.log(timeCorrect('09:10:01')); // '09:10:01'
console.log(timeCorrect('11:70:10')); // '12:10:10'
console.log(timeCorrect('19:99:09')); // '20:39:09'
console.log(timeCorrect('19:99:99')); // '20:40:39'
console.log(timeCorrect('24:01:01')); // '00:01:01'
console.log(timeCorrect('52:01:01')); // '04:01:01'
console.log(timeCorrect('14:59:94')); // '15:00:34'
