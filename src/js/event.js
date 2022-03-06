const opt = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

function getTime(min) {
    return `${String(Math.floor(min / 60)).padStart(2, '0')}` +
        `:` +
        `${String(Math.floor(min % 60)).padStart(2, '0')}` +
        ` (${min})`;
};

function newYearCelebrations(takeOffTime, minutes) {
    const newYear = new Date(2022, 0, 1, 0, 0, 0), //01.01.2022 00:00
        [takeOffHours, takeOffMinutes] = takeOffTime.split(':');
    let nowTime,
        prevTime,
        countNewYear = 0,
        timeZone = 0;

    if (takeOffTime === '00:00') {
        takeOffTime = new Date(2022, 0, 1, 0, 0);
    } else {
        takeOffTime = new Date(2021, 11, 31, takeOffHours, takeOffMinutes);
    }

    prevTime = new Date(takeOffTime);
    console.log(takeOffTime.toLocaleString(opt));
    console.log(minutes)
    minutes = minutes.map((el, index) => {
        if (!index) return el;
        return el - minutes[index - 1];
    });
    console.log(minutes);

    minutes.forEach(min => {
        nowTime = new Date(prevTime);
        nowTime.setMinutes(prevTime.getMinutes() + min);
        console.log(`${nowTime.toLocaleString(opt)} takeOff ${getTime(min)}`);
        if (nowTime >= newYear && prevTime <= newYear)
            countNewYear++;
        nowTime.setMinutes(nowTime.getMinutes() - 60);
        prevTime = new Date(nowTime);
        console.log(`${prevTime.toLocaleString(opt)}` +
            ` prev Time zone: ${++timeZone}`);

        console.log(countNewYear);
    });

    if (prevTime <= newYear) countNewYear++;
    if (!countNewYear) countNewYear++;

    console.groupCollapsed(`RESULT = ${countNewYear}`);
    console.log('Nothing');
    console.groupEnd();

    return countNewYear;
}

console.log(newYearCelebrations("23:35", [60, 90, 140])); //3
console.log(newYearCelebrations("00:00", [60, 120, 180, 250])); //4
console.log(newYearCelebrations("13:36", [23, 33, 45, 56, 66, 88])); //1
console.log(newYearCelebrations("22:50", [])); //1
console.log(newYearCelebrations("20:18", [222, 342])); //3
console.log(newYearCelebrations("12:05", [1, 109, 113, 344, 345, 478, 545, 565, 809, 814, 838, 883, 971, 1007, 1029, 1053, 1133, 1271, 1314, 1500])); //1
console.log(newYearCelebrations("17:10", [150, 160, 293, 589, 614, 716, 760, 776, 781, 911, 1040, 1438])); //3
console.log(newYearCelebrations("18:15", [117, 241, 364, 375, 545, 1317])); //1
console.log(newYearCelebrations("19:44", [545, 1320])); //1
console.log(newYearCelebrations("21:13", [52, 257, 323, 515, 579, 600, 703, 707, 1127, 1298])); //3