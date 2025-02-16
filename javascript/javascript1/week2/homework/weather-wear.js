// Exercise 3 - Weather wear

function weatherWear(temperatureInCelsius) {
  if (temperatureInCelsius < 0) {
    return "Wear a heavy coat, scarf, gloves, and boots.";
  } else if (temperatureInCelsius >= 0 && temperatureInCelsius <= 10) {
    return "Wear a coat, hat, and boots.";
  } else if (temperatureInCelsius > 10 && temperatureInCelsius <= 20) {
    return "Wear a jacket and boots.";
  } else if (temperatureInCelsius > 20 && temperatureInCelsius <= 30) {
    return "Wear a t-shirt and jeans.";
  } else {
    return "Wear shorts and a t-shirt.";
  }
}

console.log(weatherWear(-5));
