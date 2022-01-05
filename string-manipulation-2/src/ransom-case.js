/* exported ransomCase */
function ransomCase(string) {
  var lowerCased = string.toLowerCase();
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    currentIndex = lowerCased[i];
    if (i % 2 !== 0) {
      newString += currentIndex.toUpperCase();
    } else {
      newString += currentIndex;
    }
  }
  return newString;
}
