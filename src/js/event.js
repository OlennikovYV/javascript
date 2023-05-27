function aspectRatio(x, y) {
  return [Math.ceil((y * 16) / 9), y];
}

console.log(aspectRatio(640, 480)); // [854, 480]
console.log(aspectRatio(960, 720)); // [1280, 720]
console.log(aspectRatio(1440, 1080)); // [1920, 1080]
console.log(aspectRatio(1920, 1440)); // [2560, 1440]
