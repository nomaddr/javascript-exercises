const convertToCelsius = function(temp) {
  let res = (temp - 32) / (9/5);
  //res = +(res).toPrecision(2);
  return Math.round(res * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let res = temp * 9/5 + 32;
  //res = +(res).toPrecision(2);
  return Math.round(res * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
