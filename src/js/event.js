function formatDuration(seconds) {
    let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        result = [];

    if (seconds === 0) return 'now';

    for (let key in time)
        if (seconds >= time[key]) {
            let el = Math.floor(seconds / time[key]);

            result.push(el += el > 1 ? ' ' + key + 's' : ' ' + key);
            seconds %= time[key];
        }

    return result.length > 1 ? result.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : result[0];
}

console.log(formatDuration(1)); //  "1 second"
console.log(formatDuration(62)); //  "1 minute and 2 seconds"
console.log(formatDuration(120)); //  "2 minutes"
console.log(formatDuration(3600)); //  "1 hour"
console.log(formatDuration(3662)); //  "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(3600 * 24)); //  "1 day"
console.log(formatDuration(3600 * 24 * 365)); //  "1 year"
console.log(formatDuration(3600 * 24 * 365 + 3662)); //  "1 year, 1 hour, 1 minute and 2 seconds"