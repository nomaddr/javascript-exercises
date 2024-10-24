const reverseString = function(string) {
  let len = string.length;
  let result = "";
  for (let i = len - 1; i > -1; i--) {
    result += string.charAt(i);
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
