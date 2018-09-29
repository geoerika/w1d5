function isPalindrome(s) {
  var stringNoSpace = s.split(" ").join("");
  var stringReverse = stringNoSpace.split("").reverse().join("");
  return stringNoSpace == stringReverse;
}

module.exports = isPalindrome;
