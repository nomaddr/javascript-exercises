const removeFromArray = function() {

  if (arguments.length < 2) return arguments[0];

  let array = arguments[0]
  let result = [];

  for (let i=1; i < arguments.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k] != arguments[i]) {
        result.push(array[k]);
      }
    }
  }
  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
