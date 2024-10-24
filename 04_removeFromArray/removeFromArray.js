const removeFromArray = function() {

  if (arguments.length < 2) return arguments[0];

  let array = arguments[0]

  for (let i=1; i < arguments.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if (array[k] === arguments[i]) {
        delete array[k];
      }
    }
  }
  array = array.filter(function(element) { 
        return element !== undefined;
        });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
