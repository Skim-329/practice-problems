/* exported lastChars */
function lastChars(length, string) {
  var newString = "";
  for (var i = string.length - length; i < string.length; i++) {
    if (string.length > length) {
      newString += string[i];
    } else if (string === "") {
      newString = "";
    } else {
      newString = string;
    }
  }
  return newString;
}
