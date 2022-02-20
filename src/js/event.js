function friend(friends) {
    return friends.reduce((acc, el) => {
        if (el.length == 4) acc.push(el);
        return acc;
    }, []);
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); //["Ryan"]