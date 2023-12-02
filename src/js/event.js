function elevatorDistance(array) {
  let countFloor = 0;

  array.reduce((currentFloor, travel) => {
    countFloor += Math.abs(currentFloor - travel);
    currentFloor = travel;

    return currentFloor;
  });

  return countFloor;
}

console.log(elevatorDistance([5, 2, 8])); // 9
console.log(elevatorDistance([1, 2, 3])); // 2
console.log(elevatorDistance([7, 1, 7, 1])); // 18
