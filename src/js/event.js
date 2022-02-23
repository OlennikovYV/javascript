function setAlarm(employed, vacation) {
    return (employed && employed !== vacation);
}

console.log(setAlarm(true, true)); //false
console.log(setAlarm(false, true)); //false
console.log(setAlarm(false, false)); //false
console.log(setAlarm(true, false)); //true