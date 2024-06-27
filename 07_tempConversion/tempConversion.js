const convertToCelsius = function(userTemp) {
    convertedTemp = (userTemp - 32) * 5/9;
    return Math.round(convertedTemp * 10) / 10; 
};

const convertToFahrenheit = function(userTemp) {
    convertedTemp = userTemp * 9/5 + 32;
    return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
