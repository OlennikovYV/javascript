function formatDuration(seconds) {
    let y = Math.floor(seconds / 31536000),
        d = Math.floor(seconds / 86400) % 365,
        h = Math.floor(seconds / 3600) % 24,
        m = Math.floor(seconds / 60) % 60,
        s = seconds % 60,
        result = '';

    function setText(time) {
        time[0] = (time[0] ? time[0] + ' year' : '') + (time[0] > 1 ? 's' : '');
        time[1] = (time[1] ? time[1] + ' day' : '') + (time[1] > 1 ? 's' : '');
        time[2] = (time[2] ? time[2] + ' hour' : '') + (time[2] > 1 ? 's' : '');
        time[3] = (time[3] ? time[3] + ' minute' : '') + (time[3] > 1 ? 's' : '');
        time[4] = (time[4] ? time[4] + ' second' : '') + (time[4] > 1 ? 's' : '');

        return time;
    }

    if (!seconds) return 'now';

    result = setText([y, d, h, m, s]).filter(el => el);

    if (result.length > 1)
        result[result.length - 1] = ' and ' + result[result.length - 1];
    if (result.length > 2)
        for (let i = 0; i < result.length - 2; i++)
            result[i] = result[i] + ', ';

    return result.join('');
}

console.log(formatDuration(1)); //  "1 second"
console.log(formatDuration(62)); //  "1 minute and 2 seconds"
console.log(formatDuration(120)); //  "2 minutes"
console.log(formatDuration(3600)); //  "1 hour"
console.log(formatDuration(3662)); //  "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(3600 * 24)); //  "1 day"
console.log(formatDuration(3600 * 24 * 365)); //  "1 year"
console.log(formatDuration(3600 * 24 * 365 + 3662)); //  "1 year, 1 hour, 1 minute and 2 seconds"