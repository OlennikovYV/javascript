function hexStringToRGB(hexString) {
  var hexArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
  return hexArray
    ? {
        r: parseInt(hexArray[1], 16),
        g: parseInt(hexArray[2], 16),
        b: parseInt(hexArray[3], 16),
      }
    : null;
}

console.log(hexStringToRGB('#FF9933')); // {r:255, g:153, b:51}
