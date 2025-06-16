//Variable declaration
const farenheit = prompt("Enter temperature in farenheit");
const celsius = convertToCelsius(farenheit);
const description = describeTemperature(celsius);
alert(
  `The equivalent to ${farenheit} in celsius is ${celsius} degrees. The temperature will feel ${description}.`
);
//Farenheit to celsius conversion
function convertToCelsius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}

function describeTemperature(celsius) {
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}
