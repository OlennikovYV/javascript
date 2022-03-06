function newYearCelebrations(takeOffTime, minutes) {
    const newYear = 60 * 24,
        [takeOffHours, takeOffMinutes] = takeOffTime.split(':');
    let nowTime,
        prevTime,
        countNewYear = 0;

    if (takeOffTime === '00:00')
        nowTime = prevTime = newYear;
    else
        nowTime = prevTime = +takeOffHours * 60 + +takeOffMinutes;

    minutes = minutes.map((el, index) => {
        if (!index) return el;
        return el - minutes[index - 1];
    });

    minutes.forEach(min => {
        nowTime += min;
        if (nowTime >= newYear && newYear >= prevTime)
            countNewYear++;
        nowTime -= 60;
        prevTime = nowTime;
    });

    if (prevTime <= newYear) countNewYear++;
    if (!countNewYear) countNewYear++;

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