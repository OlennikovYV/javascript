const weatherInfo = temperature => convertToCelsius(temperature);

const temperatureMessage = temperature =>
  temperature < 0
    ? temperature + ' is freezing temperature'
    : temperature + ' is above freezing temperature';

const convertToCelsius = temperature =>
  temperatureMessage(((temperature - 32) * 5) / 9);

console.log(weatherInfo(50)); // '10 is above freezing temperature')
console.log(weatherInfo(23)); //  '-5 is freezing temperature')
