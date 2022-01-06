/* exported firstChars */
function firstChars(length, string) {
  var newString = "";
  for (var i = 0; i < length; i++) {
    if (length < string.length) {
      newString += string[i];
    } else if (string === "") {
      newString += "";
    } else {
      newString = string;
    }
  }
  return newString;
}
