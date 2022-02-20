function friend(friends) {
    return friends.filter(el => el.length == 4);
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); //["Ryan"]